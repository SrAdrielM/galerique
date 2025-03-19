import express from "express";

const router = express.Router();

import sellerController from "../controllers/sellerCtrl.js";

router.route("/")
.get(sellerController.getBuyer)
.post(sellerController.insertBuyer);

router.route("/:id")
.put(sellerController.updateBuyer)
.delete(sellerController.deleteBuyer);

export default router;