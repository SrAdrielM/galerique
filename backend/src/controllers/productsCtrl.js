import productsModel from "../models/productsMdl.js";
 
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
  const { title, description, price, size, sellerId, techniqueId, categoriesId } = req.body;
 
  const newProduct = new productsModel({ title, description, price, size, sellerId, techniqueId, categoriesId });
 
  try {
    await newProduct.save();
    res.json({ message: "Producto guardado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al guardar el producto", error });
  }
};
 
// DELETE - Eliminar un producto por ID
productsController.deleteProduct = async (req, res) => {
  try {
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
    const updatedProduct = await productsModel.findByIdAndUpdate(
req.params.id,
      { title, description, price, size, sellerId, techniqueId, categoriesId },
      { new: true }
    );
    res.json({ message: "Producto actualizado exitosamente", product: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el producto", error });
  }
};
 
export default productsController;