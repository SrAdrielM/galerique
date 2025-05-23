import BuyerMdl from "../models/BuyerMdl.js";
import SellerMdl from "../models/SellerMdl.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let userFound;
    let userType;

    // 1. ADMIN
    if (
        email === config.emailAdmin.email &&
        password === config.emailAdmin.password
        ) {
        console.log("Credenciales de admin correctas");
        userType = "admin";
        userFound = { _id: "admin" };
        } else {
      //2-Buyer
      userFound = await BuyerMdl.findOne({ email });
      userType = "buyer";

      if (!userFound) {
        userFound = await SellerMdl.findOne({ email });
        userType = "seller";
      }
    }

    //Usuario no encontrado
    if (!userFound) {
      console.log("A pesar de buscar en todos lados, no existe");
      return res.json({ message: "User not found" });
    }

    // Solo si no es Admin
    if (userType !== "admin") {
      //veamos si la contraseña que están escribiendo
      // en el login
      // Es la misma, que la que está en la BD (encriptada)
      const isMatch = await bcryptjs.compare(password, userFound.password);
      if (!isMatch) {
        console.log("no matchea");
        return res.json({ message: "Contraseña incorrecta" });
      }
    }

    // --> TOKEN <--
    jsonwebtoken.sign(
      //1-Que voy a guardar
      { id: userFound._id, userType },
      //2-Secreto
      config.JWT.secret,
      //3- cuando expira
      { expiresIn: config.JWT.expiresIn },
      //4-funcion flecha
      (error, token) => {
        if (error) console.log(error);

        res.cookie("authToken", token);
        res.json({ message: "Inicio sesion: " + userType });
      }
    );
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "error", error: error.message });
  }
};

export default loginController;