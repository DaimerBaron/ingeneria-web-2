import Media from "../models/Media.js";
import crypto from "crypto";

class MediaController {
  async getMedia(req, res) {
    try {
      const media = await Media.find()
        .populate("Genre", "name")
        .populate("Type", "name")
        .populate("Director", "name")
        .populate("Producer", "name");
      res.status(200).json(media);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async createMedia(req, res) {
    try {
      const serial = crypto.randomUUID();
      const newMedia = new Media({ ...req.body,serial });
      await newMedia.save();
      res.status(200).json(newMedia);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async updateMedia(req, res) {
    try {
      const { id } = req.params;
      const updatedMedia = await Media.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      )
        .populate("Genre", "name")
        .populate("Type", "name")
        .populate("Director", "name")
        .populate("Producer", "name");
      if (!updatedMedia) {
        return res.status(404).send("Media not found");
      }
      res.status(201).json(updatedMedia);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async deleteMedia(req, res) {
    const { id } = req.params;
    await Media.findByIdAndDelete(id);
    try {
      res.status(200).json({ message: "Media deleted" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new MediaController();
