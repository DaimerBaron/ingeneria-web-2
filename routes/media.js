import express from "express";
import MediaController from "../controllers/media.js";

const router = express.Router();

router.get('/',MediaController.getMedia);
router.get('/:id',MediaController.getOneMedia)
router.post('/',MediaController.createMedia);
router.put('/:id',MediaController.updateMedia);
router.delete('/:id',MediaController.deleteMedia);


export default router;