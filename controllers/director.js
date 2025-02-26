import Director from "../models/Director.js";

class directorController {
  async getAllDirectors(req, res) {
    try {
      const genres = await Director.find();
      res.status(200).json(Director);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
 async getdirector(req, res) {
    const { id } = req.params;
    try {
      const director = await Director.findById(id);
      res.status(200).json(director);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createDirector(req, res) {
    try {
      const {name,state,description} = req.body;
      const newDirector = new Director({name,state,description});
      await newDirector.save();
      res.status(200).json(newDirector);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateDirector(req, res) {
    const { id } = req.params;
    const genre = req.body;
    const { name, state, description } = director;
    try {
      const updatedDirector = await Director.findByIdAndUpdate(
        id,
        { name, state, description, dateUpdated: Date().now },
        { new: true }
      );
      if (!updatedDirector)
        return res.status(404).json({ message: "Director not found" });
      res.status(200).json(updatedDirector);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}


export default new directorController();