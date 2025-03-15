import Type from "../models/Type.js";

class TypeController { // <-- Cambia a PascalCase (mayúscula inicial)
  async getAllTypes(req, res) {
    try {
      const types = await Type.find();
      res.status(200).json(types);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createType(req, res) {
    try {
      const { name, description } = req.body;
      const newType = new Type({ name, description });
      await newType.save();
      res.status(201).json(newType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateType(req, res) {
    const { id } = req.params;
    try {
      const updatedType = await Type.findByIdAndUpdate(
        id,
        { name: req.body.name, description: req.body.description, dateUpdated: new Date() },
        { new: true }
      );
      if (!updatedType) return res.status(404).json({ message: "Type not found" });

      res.status(200).json(updatedType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteType(req, res) {
    const { id } = req.params;
    try {
      const deletedType = await Type.findByIdAndDelete(id);
      if (!deletedType) return res.status(404).json({ message: "Tipo no encontrado" });

      res.status(200).json({ message: "Tipo eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new TypeController(); // <-- Exporta con la nueva clase en mayúscula
