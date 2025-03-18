import express from "express";

const router = express.Router();

import reviewsController from "../controllers/reviewsCtrl.js";

router.route("/")
.get(reviewsController.getReviews)
.post(reviewsController.insertReviews);

router.route("/:id")
.put(reviewsController.updateReviews)
.delete(reviewsController.deleteReviews);

export default router;