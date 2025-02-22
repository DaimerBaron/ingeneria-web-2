class MediaController {
    constructor(){
        
    }
    async getMedia(req, res) {
        try {
            res.status(201).json({status: 'get-okay'});
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async createMedia(req, res) {
        try {
            res.status(201).json({status: 'create-okay'});
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