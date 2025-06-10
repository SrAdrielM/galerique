const buyerController = {};
import buyerModel from "../models/BuyerMdl.js"

// SELECT
buyerController.getBuyer = async (req, res) => {
    const Buyer = await buyerModel.find()
    res.json(Buyer)
}

// INSERT
buyerController.insertBuyer = async (req, res) => {
    const { fullName, profilePic, userName, email, password, phone, accountDate } = req.body;
    const newBuyer = new buyerModel ({ fullName, profilePic, userName, email, password, phone, accountDate })
    await newBuyer.save()
    res.json({message: "buyer saved"})
}

// DELETE
buyerController.deleteBuyer = async (req, res) => {
    await buyerModel.findByIdAndDelete(req.params.id)
    res.json({message: "buyer deleted"})
}

// UPDATE
buyerController.updateBuyer = async (req, res) => {
    const { fullName, profilePic, userName, email, password, phone, accountDate } = req.body;
    const updateBuyer = await buyerModel.findByIdAndUpdate(req.params.id, { fullName, profilePic, userName, email, password, phone, accountDate }, {new: true});
    res.json({message: "buyer update succesfully"})
} 

export default buyerController;