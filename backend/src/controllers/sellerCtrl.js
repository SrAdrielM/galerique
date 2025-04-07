const sellerController = {};
import sellerModel from "../models/SellerMdl.js"

// SELECT
sellerController.getBuyer = async (req, res) => {
    const seller = await sellerModel.find().populate("idProduct")
    res.json(seller)
}

// INSERT
sellerController.insertBuyer = async (req, res) => {
    const { fullName, userName, email, password, phone, idProduct } = req.body;
    const newSeller = new sellerModel ({ fullName, userName, email, password, phone, idProduct })
    await newSeller.save()
    res.json({message: "seller saved"})
}

// DELETE
sellerController.deleteBuyer = async (req, res) => {
    await sellerModel.findByIdAndDelete(req.params.id)
    res.json({message: "seller deleted"})
}

// UPDATE
sellerController.updateBuyer = async (req, res) => {
    const { fullName, userName, email, password, phone } = req.body;
    const updateBuyer = await sellerModel.findByIdAndUpdate(req.params.id, { fullName, userName, email, password, phone, idProduct }, {new: true});
    res.json({message: "seller update succesfully"})
} 

export default sellerController;