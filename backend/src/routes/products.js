import express from "express";
import productCtrl from "../controllers/productsCtrl.js";

const router = express.Router();

router
  .route("/")
  .get(productCtrl.getProducts)
  .post(productCtrl.insertProduct);

router
  .route("/:id")
  .put(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct);

export default router;