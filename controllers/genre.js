import Genre from "../models/genre.js";

class genreController {
  async getAllGenres(req, res) {
    try {
      const genres = await Genre.find();
      res.status(200).json(genres);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  async createGenre(req, res) {
    try {
      const {name,state,description} = req.body;
      const newGenre = new Genre({name,state,description});
      await newGenre.save();
      res.status(200).json(newGenre);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateGenre(req, res) {
    const { id } = req.params;
    const genre = req.body;
    const { name, state, description } = genre;
    try {
      const updatedGenre = await Genre.findByIdAndUpdate(
        id,
        { name, state, description, dateUpdated: Date().now },
        { new: true }
      );
      if (!updatedGenre)
        return res.status(404).json({ message: "Genre not found" });
      res.status(200).json(updatedGenre);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}


export default new genreController();