const salesController = {};
import salesModel from "../models/salesMdl.js"

// SELECT
salesController.getSales = async (req, res) => {
    const sales = await salesModel.find().populate("idOrder")
    res.json(sales)
}

// INSERT
salesController.insertSales = async (req, res) => {
    const { address, cardInfo, idOrder } = req.body;
    const newSale = new salesModel ({ address, cardInfo, idOrder })
    await newSale.save()
    res.json({message: "Review saved"})
}

// DELETE
salesController.deleteSales = async (req, res) => {
    await salesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review deleted"})
}

// UPDATE
salesController.updateSales = async (req, res) => {
    const { address, cardInfo, idOrder } = req.body;
    const updateSales = await salesModel.findByIdAndUpdate(req.params.id, { address, cardInfo, idOrder }, {new: true});
    res.json({message: "Review update succesfully"})
} 

export default salesController;