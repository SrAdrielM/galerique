import categoriesModel from "../models/categoriesMdl.js";
 
const categoriesController = {};
 
// SELECT - Obtener todas las categorías
categoriesController.getCategories = async (req, res) => {
  try {
    const categories = await categoriesModel.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las categorías", error });
  }
};
 
// INSERT - Agregar una nueva categoría
categoriesController.insertCategory = async (req, res) => {
  const { categoryName } = req.body;
 
  const newCategory = new categoriesModel({ categoryName });
 
  try {
    await newCategory.save();
    res.json({ message: "Categoría guardada exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al guardar la categoría", error });
  }
};
 
// DELETE - Eliminar una categoría por ID
categoriesController.deleteCategory = async (req, res) => {
  try {
await categoriesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Categoría eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la categoría", error });
  }
};
 
// UPDATE - Actualizar una categoría por ID
categoriesController.updateCategory = async (req, res) => {
  const { categoryName } = req.body;
 
  try {
    const updatedCategory = await categoriesModel.findByIdAndUpdate(
req.params.id,
      { categoryName },
      { new: true }
    );
    res.json({ message: "Categoría actualizada exitosamente", category: updatedCategory });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la categoría", error });
  }
};
 
export default categoriesController;