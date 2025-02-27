import express from "express";
import MediaController from "../controllers/media.js";
import {validationResult,check} from "express-validator";

const validateType = [
    check("name", "invalid.name").not().isEmpty(),
    check("description","invalid.description").not().isEmpty(),
    function (req, res, next){
        const errors = validationResult (req);
        if (!errors.isEmpty()) {
            return res.status(400).json ({message: errors.array()});
        }
        next();
    }
]


const router = express.Router();

router.get('/',MediaController.getMedia);
router.get('/:id',MediaController.getOneMedia)
router.post('/',MediaController.createMedia);
router.put('/:id',MediaController.updateMedia);
router.delete('/:id',MediaController.deleteMedia);


export default router;