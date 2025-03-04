import Producer from "../models/Producer.js";

class producerController {
  async getAllProducers(req, res) {
    try {
      const producers = await Producer.find();
      res.status(200).json(producers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async createProducer(req, res) {
    try {
      const { name, state, slogan, description } = req.body;
      const newProducer = new Producer({ name, state, slogan, description });
      await newProducer.save();
      res.status(200).json(newProducer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateProducer(req, res) {
    const { id } = req.params;
    const producer = req.body;
    const { name, state, description } = producer;
    try {
      const updatedProducer = await Producer.findByIdAndUpdate(
        id,
        { name, state, description },
        { new: true }
      );
      if (!updatedProducer)
        return res.status(404).json({ message: "Producer not found" });
      res.status(200).json(updatedProducer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new producerController();
