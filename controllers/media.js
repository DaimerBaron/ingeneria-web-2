import Media from '../models/Media.js'

class MediaController {
    constructor(){
        
    }
    async getMedia(req, res) {
        try {
            const media = await Media.find(); //para obtener todos lo registros
            console.log(media);
            
        } catch (error) {
            res.status(500).send(error);
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
            res.status(201).json({status: 'update-okay'});
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async deleteMedia(req, res) {
        try {
            res.status(201).json({status: 'delete-okay'});
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new MediaController();