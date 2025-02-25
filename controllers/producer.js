import Producer from "../models/Producer.js";

class producerController {
  async getAllProducers(req, res) {
    try {
      const producers = await Producer.find();
      res.status(200).json(producer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProducer(req, res) {
    const { id } = req.params;
    try {
      const producer = await Producer.findById(id);
      res.status(200).json(producer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createProducer(req, res) {
    try {
      const {name,state,description} = req.body;
      const newProducer= new Producer({name,state,description});
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
        { name, state, description, dateUpdated: Date().now },
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