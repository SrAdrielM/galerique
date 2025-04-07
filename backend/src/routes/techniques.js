import express from "express";
import techniqueCtrl from "../controllers/techniquesCtrl.js";

const router = express.Router();

router
  .route("/")
  .get(techniqueCtrl.getTechniques)
  .post(techniqueCtrl.insertTechnique);

router
  .route("/:id")
  .put(techniqueCtrl.updateTechnique)
  .delete(techniqueCtrl.deleteTechnique);

export default router;