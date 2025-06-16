import express from "express";
import { upload } from "../cloudinary.js";

const router = express.Router();

import buyerController from "../controllers/buyerCtrl.js";

router.route("/")
.get(buyerController.getBuyer)
.post(upload.single('image'), buyerController.insertBuyer);

router.route("/:id")
.put(buyerController.updateBuyer)
.delete(buyerController.deleteBuyer);

export default router;