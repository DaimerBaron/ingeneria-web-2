import express from "express";
import MediaController from "../controllers/media.js";

const router = express.Router();

router.get('/',MediaController.getMedia);
router.post('/',MediaController.createMedia);
router.put('/:id',MediaController.updateMedia);
router.delete('/:id',MediaController.deleteMedia);


export default router;