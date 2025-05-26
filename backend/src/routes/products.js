import express from "express";
import productCtrl from "../controllers/productsCtrl.js";
import { upload } from "../cloudinary.js"; // Importar la configuración de upload

const router = express.Router();

router
  .route("/")
  .get(productCtrl.getProducts)
  .post(upload.single('image'), productCtrl.insertProduct); // Agregar el middleware de upload

router
  .route("/:id")
  .put(upload.single('image'), productCtrl.updateProduct) // También para update
  .delete(productCtrl.deleteProduct);

export default router;