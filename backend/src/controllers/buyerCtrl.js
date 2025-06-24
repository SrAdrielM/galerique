import buyerModel from "../models/BuyerMdl.js"
import { cloudinary } from "../cloudinary.js";
import bcryptjs from "bcryptjs";

const buyerController = {};

// SELECT
buyerController.getBuyer = async (req, res) => {
    const Buyer = await buyerModel.find()
    res.json(Buyer)
}

// INSERT
buyerController.insertBuyer = async (req, res) => {
    try{
        const { fullName, userName, email, password, phone, accountDate } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "La imagen es obligatoria" });
        }

        const existingUser = await buyerModel.findOne({
            $or: [{ email: email }, { userName: userName }]
        });

        if (existingUser) {
            return res.status(409).json({ message: "El correo o nombre de usuario ya está en uso" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
    
        console.log('Imagen subida a Cloudinary:', {
            url: req.file.path,
            publicId: req.file.filename
        });
        
        const newBuyer = new buyerModel ({ 
            fullName, 
            profilePic: req.file.path,
            profilePicPublic: req.file.filename, 
            userName, 
            email, 
            password: hashedPassword, 
            phone, 
            accountDate })
        await newBuyer.save()
        res.json({message: "buyer saved", imageUrl: req.file.path})
    } catch {
        console.error('Error completo:', error);
        // Si hay error, eliminar la imagen de Cloudinary
        if (req.file) {
        await cloudinary.uploader.destroy(req.file.filename);
        }
        res.status(400).json({ message: "failed to register ", error });
    }
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