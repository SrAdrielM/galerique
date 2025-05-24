import express from "express";

const router = express.Router();

import sellerController from "../controllers/sellerCtrl.js";

router.route("/")
.get(sellerController.getSeller)
.post(sellerController.insertSeller);

router.route("/:id")
.put(sellerController.updateSeller)
.delete(sellerController.deleteSeller);

export default router;