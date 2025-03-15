import Producer from "../models/Producer.js";

class ProducerController {
  async getAllProducers(req, res) {
    try {
      const producers = await Producer.find();
      return res.status(200).json(producers);
    } catch (error) {
      console.error("Error fetching producers:", error);
      return res.status(500).json({ message: "Error fetching producers" });
    }
  }

  async createProducer(req, res) {
    try {
      const { name, state, slogan, description } = req.body;

      if (!name || !state || !slogan || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newProducer = new Producer({ name, state, slogan, description });
      await newProducer.save();

      return res.status(201).json(newProducer);
    } catch (error) {
      console.error("Error creating producer:", error);
      return res.status(500).json({ message: "Error creating producer" });
    }
  }

  async updateProducer(req, res) {
    const { id } = req.params;
    const { name, state, slogan, description } = req.body;

    try {
      const updatedProducer = await Producer.findByIdAndUpdate(
        id,
        { name, state, slogan, description },
        { new: true, runValidators: true }
      );

      if (!updatedProducer) {
        return res.status(404).json({ message: "Producer not found" });
      }

      return res.status(200).json(updatedProducer);
    } catch (error) {
      console.error("Error updating producer:", error);
      return res.status(500).json({ message: "Error updating producer" });
    }
  }
}

export default new ProducerController();
