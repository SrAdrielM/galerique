import express from "express";

const router = express.Router();

import salesController from "../controllers/salesCtrl.js";

router.route("/")
.get(salesController.getSales)
.post(salesController.insertSales);

router.route("/:id")
.put(salesController.updateSales)
.delete(salesController.deleteSales);

export default router;