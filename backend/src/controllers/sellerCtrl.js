const sellerController = {};
import sellerModel from "../models/SellerMdl.js"

// SELECT
sellerController.getSeller = async (req, res) => {
    const seller = await sellerModel.find().populate("idProduct")
    res.json(seller)
}

// INSERT
sellerController.insertSeller = async (req, res) => {
    const { fullName, userName, email, password, phone } = req.body;
    const newSeller = new sellerModel ({ fullName, userName, email, password, phone })
    await newSeller.save()
    res.json({message: "seller saved"})
}

// DELETE
sellerController.deleteSeller = async (req, res) => {
    await sellerModel.findByIdAndDelete(req.params.id)
    res.json({message: "seller deleted"})
}

// UPDATE
sellerController.updateSeller = async (req, res) => {
    const { fullName, userName, email, password, phone } = req.body;
    const updateBuyer = await sellerModel.findByIdAndUpdate(req.params.id, { fullName, userName, email, password, phone }, {new: true});
    res.json({message: "seller update succesfully"})
} 

export default sellerController;