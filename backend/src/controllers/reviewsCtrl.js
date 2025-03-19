const reviewsController = {};
import reviewsModel from "../models/reviewsMdl.js"

// SELECT
reviewsController.getReviews = async (req, res) => {
    const reviews = await reviewsModel.find().populate("idProduct").populate("idBuyer")
    res.json(reviews)
}

// INSERT
reviewsController.insertReviews = async (req, res) => {
    const { comment, rating, idProduct, idBuyer } = req.body;
    const newReview = new reviewsModel ({ comment, rating, idProduct, idBuyer })
    await newReview.save()
    res.json({message: "Review saved"})
}

// DELETE
reviewsController.deleteReviews = async (req, res) => {
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review deleted"})
}

// UPDATE
reviewsController.updateReviews = async (req, res) => {
    const { comment, rating, idProduct, idBuyer } = req.body;
    const updateReviews = await reviewsModel.findByIdAndUpdate(req.params.id, { comment, rating, idProduct, idBuyer }, {new: true});
    res.json({message: "Review update succesfully"})
} 

export default reviewsController;