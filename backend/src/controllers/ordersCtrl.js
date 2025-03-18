const ordersController = {};
import ordersModel from "../models/ordersMdl.js"

// SELECT
ordersController.getOrders = async (req, res) => {
    const orders = await ordersModel.find().populate("idProduct").populate("idBuyer")
    res.json(orders)
}

// INSERT
ordersController.insertOrders = async (req, res) => {
    const { products, idBuyer, total } = req.body;
    const newOrder = new ordersModel ({ products, idBuyer, total })
    await newOrder.save()
    res.json({message: "order saved"})
}

// DELETE
ordersController.deleteOrders = async (req, res) => {
    await ordersModel.findByIdAndDelete(req.params.id)
    res.json({message: "order deleted"})
}

// UPDATE
ordersController.updateOrders = async (req, res) => {
    const { products, idBuyer, total } = req.body;
    const updateOrders = await ordersModel.findByIdAndUpdate(req.params.id, { products, idBuyer, total }, {new: true});
    res.json({message: "order update succesfully"})
} 

export default ordersController;