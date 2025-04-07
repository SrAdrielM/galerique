import express from "express";

const router = express.Router();

import ordersController from "../controllers/ordersCtrl.js";

router.route("/")
.get(ordersController.getOrders)
.post(ordersController.insertOrders);

router.route("/:id")
.put(ordersController.updateOrders)
.delete(ordersController.deleteOrders);

export default router;