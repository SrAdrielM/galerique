import BuyerMdl from "../models/BuyerMdl.js";
import SellerMdl from "../models/SellerMdl.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let userFound = null;
    let userType = null;

    // 1. ADMIN (validación directa sin bcrypt)
    if (
      email === config.emailAdmin.email &&
      password === config.emailAdmin.password
    ) {
      console.log("Credenciales de admin correctas");
      userType = "admin";
      userFound = { _id: "admin" };
    } else {
      // 2. Buyer
      userFound = await BuyerMdl.findOne({ email });
      if (userFound) {
        userType = "buyer";
      } else {
        // 3. Seller
        userFound = await SellerMdl.findOne({ email });
        if (userFound) {
          userType = "seller";
        }
      }

      // Si no se encuentra ningún usuario
      if (!userFound) {
        return res.status(404).json({ success: false, message: "Usuario no encontrado" });
      }

      // Comparar la contraseña con bcrypt
      const isMatch = await bcryptjs.compare(password, userFound.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
      }
    }

    // Crear token JWT
    jsonwebtoken.sign(
      { id: userFound._id, userType },
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIn },
      (error, token) => {
        if (error) {
          console.log("Error generando token:", error);
          return res.status(500).json({ success: false, message: "Error generando token" });
        }

        res.cookie("authToken", token, {
          httpOnly: true,
          secure: false,
          sameSite: "Lax",
          maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({
          success: true,
          tipo: userType,
          token,
          message: "Inicio de sesión exitoso",
        });
      }
    );
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

export default loginController;