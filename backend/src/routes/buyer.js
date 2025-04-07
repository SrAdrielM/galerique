import express from "express";

const router = express.Router();

import buyerController from "../controllers/buyerCtrl.js";

router.route("/")
.get(buyerController.getBuyer)
.post(buyerController.insertBuyer);

router.route("/:id")
.put(buyerController.updateBuyer)
.delete(buyerController.deleteBuyer);

export default router;