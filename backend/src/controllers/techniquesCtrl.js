import techniquesModel from "../models/techniquesMdl.js";
 
const techniquesController = {};
 
// SELECT - Obtener todas las técnicas
techniquesController.getTechniques = async (req, res) => {
  try {
    const techniques = await techniquesModel.find();
    res.json(techniques);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las técnicas", error });
  }
};
 
// INSERT - Agregar una nueva técnica
techniquesController.insertTechnique = async (req, res) => {
  const { techniqueName } = req.body;
 
  const newTechnique = new techniquesModel({ techniqueName });
 
  try {
    await newTechnique.save();
    res.json({ message: "Técnica guardada exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al guardar la técnica", error });
  }
};
 
// DELETE - Eliminar una técnica por ID
techniquesController.deleteTechnique = async (req, res) => {
  try {
await techniquesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Técnica eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la técnica", error });
  }
};
 
// UPDATE - Actualizar una técnica por ID
techniquesController.updateTechnique = async (req, res) => {
  const { techniqueName } = req.body;
 
  try {
    const updatedTechnique = await techniquesModel.findByIdAndUpdate(
req.params.id,
      { techniqueName },
      { new: true }
    );
    res.json({ message: "Técnica actualizada exitosamente", technique: updatedTechnique });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la técnica", error });
  }
};
 
export default techniquesController;