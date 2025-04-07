import express from "express";
import categoriesCtrl from "../controllers/categoriesCtrl.js";

const router = express.Router();

router
  .route("/")
  .get(categoriesCtrl.getCategories)
  .post(categoriesCtrl.insertCategory);

router
  .route("/:id")
  .put(categoriesCtrl.updateCategory)
  .delete(categoriesCtrl.deleteCategory);

export default router;