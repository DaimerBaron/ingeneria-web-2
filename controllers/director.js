import Director from "../models/Director.js";

class directorController {
  async getAllDirectors(req, res) {
    try {
      const director = await Director.find();
      res.status(200).json(director);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async createDirector(req, res) {
    try {
      const { name, state, description } = req.body;
      const newDirector = new Director({ name, state, description });
      await newDirector.save();
      res.status(200).json(newDirector);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateDirector(req, res) {
    const { id } = req.params;
    const director = req.body;
    const { name, state } = director;
    try {
      const updatedDirector = await Director.findByIdAndUpdate(
        id,
        { name, state, dateUpdated: Date().now },
        { new: true }
      );
      if (!updatedDirector)
        return res.status(404).json({ message: "Director not found" });
      res.status(200).json(updatedDirector);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async deleteDirector(req, res) {  
    const { id } = req.params;
    try {
      const deletedDirector = await Director.findByIdAndDelete(id);
      if (!deletedDirector)
        return res.status(404).json({ message: "Director not found" });
      res.status(200).json({ message: "Director deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new directorController();
