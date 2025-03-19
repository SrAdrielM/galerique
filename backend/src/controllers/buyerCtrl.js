const buyerController = {};
import buyerModel from "../models/BuyerMdl.js"

// SELECT
buyerController.getBuyer = async (req, res) => {
    const orders = await buyerModel.find().populate("idProduct").populate("idBuyer")
    res.json(orders)
}

// INSERT
buyerController.insertBuyer = async (req, res) => {
    const { fullName, userName, email, password, phone } = req.body;
    const newOrder = new buyerModel ({ fullName, userName, email, password, phone })
    await newOrder.save()
    res.json({message: "order saved"})
}

// DELETE
buyerController.deleteBuyer = async (req, res) => {
    await buyerModel.findByIdAndDelete(req.params.id)
    res.json({message: "order deleted"})
}

// UPDATE
buyerController.updateBuyer = async (req, res) => {
    const { fullName, userName, email, password, phone } = req.body;
    const updateBuyer = await buyerModel.findByIdAndUpdate(req.params.id, { fullName, userName, email, password, phone }, {new: true});
    res.json({message: "order update succesfully"})
} 

export default buyerController;