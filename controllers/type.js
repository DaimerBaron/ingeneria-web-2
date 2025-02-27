import Type from "../models/type.js";


class typeController {
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
      const {name,description} = req.body;
      const newType = new Type({name,description});
      await newType.save();
      res.status(200).json(newType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateType(req, res) {
    const { id } = req.params;
    const type = req.body;
    const { name,description } = type;
    try {
      const updatedType = await Type.findByIdAndUpdate(
        id,
        { name, description, dateUpdated: Date().now },
        { new: true }
      );
      if (!updatedType)
        return res.status(404).json({ message: "type not found" });
      res.status(200).json(updatedType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

 export default new typeController();
// Using ES modules
// export default {
//   getAllTypes: (req, res) => {
//       res.send('Fetching all types');
//   },
//   createType: (req, res) => {
//       res.send('Creating a type');
//   },
//   updateType: (req, res) => {
//       res.send('Updating a type');
//   }
// };