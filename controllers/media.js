import Media from '../models/Media.js'

class MediaController {
    constructor(){
        
    }
    async getMedia(req, res) {
        try {
            const media = await Media.find();
            res.status(200).json(media);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOneMedia (req, res){
        try {
            const {id} = req.params;
            const media = await Media.findById(id);
            res.status(200).json(media)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async createMedia(req, res) {
        try {
            const { serial, title, synopsis } = req.body;
            const newMedia = new Media({ serial, title, synopsis });
      
            await newMedia.save();
            res.status(201).json(newMedia);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async updateMedia(req, res) {
        try {
            const { id } = req.params;
            const updatedMedia = await Media.findByIdAndUpdate(id, { ...req.body }, { new: true });
            if (!updatedMedia) {
                return res.status(404).send('Media not found');
            }   
            res.status(201).json(updatedMedia);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async deleteMedia(req, res) {
        const { id } = req.params;
        const media = await Media.findByIdAndDelete(id);
        try {
          
            res.status(201).json(media);
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new MediaController();