import productsModel from "../models/productsMdl.js";
import { cloudinary } from "../cloudinary.js";
 
const productsController = {};
 
// SELECT - Obtener todos los productos
productsController.getProducts = async (req, res) => {
  try {
    const products = await productsModel
      .find()
      .populate("sellerId")
      .populate("techniqueId")
      .populate("categoriesId");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};
 
// INSERT - Agregar un nuevo producto
productsController.insertProduct = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    console.log('Archivo recibido:', req.file);
    
    const { title, description, price, size, sellerId, techniqueId, categoriesId } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "La imagen es obligatoria" });
    }

    console.log('Imagen subida a Cloudinary:', {
      url: req.file.path,
      publicId: req.file.filename
    });

    const newProduct = new productsModel({ 
      title, 
      description, 
      price, 
      size, 
      image: req.file.path,
      imagePublicId: req.file.filename,
      // sellerId, // Comentado temporalmente
      techniqueId, 
      categoriesId 
    });

    await newProduct.save();
    res.json({ 
      message: "Producto guardado exitosamente", 
      product: newProduct,
      imageUrl: req.file.path 
    });
  } catch (error) {
    console.error('Error completo:', error);
    // Si hay error, eliminar la imagen de Cloudinary
    if (req.file) {
      await cloudinary.uploader.destroy(req.file.filename);
    }
    res.status(400).json({ message: "Error al guardar el producto", error });
  }
};
 
// DELETE - Eliminar un producto por ID
productsController.deleteProduct = async (req, res) => {
  try {
    const product = await productsModel.findById(req.params.id);
    
    if (product && product.imagePublicId) {
      await cloudinary.uploader.destroy(product.imagePublicId);
    }
    
    await productsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};
 
// UPDATE - Actualizar un producto por ID
productsController.updateProduct = async (req, res) => {
  const { title, description, price, size, sellerId, techniqueId, categoriesId } = req.body;
 
  try {
    const updateData = { title, description, price, size, techniqueId, categoriesId };
    
    // Si hay nueva imagen
    if (req.file) {
      const oldProduct = await productsModel.findById(req.params.id);
      
      // Eliminar imagen anterior
      if (oldProduct && oldProduct.imagePublicId) {
        await cloudinary.uploader.destroy(oldProduct.imagePublicId);
      }
      
      updateData.image = req.file.path;
      updateData.imagePublicId = req.file.filename;
    }

    const updatedProduct = await productsModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    
    res.json({ message: "Producto actualizado exitosamente", product: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el producto", error });
  }
};
 
export default productsController;