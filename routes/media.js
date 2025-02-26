import express from "express";
import MediaController from "../controllers/media.js";

const router = express.Router();

// crear validaciones segun el modulo media. 

const validateMedia=[
    check('serial', 'invalid.serial').not().isEmpty(),
     check('title', 'invalid.title').not().isEmpty(),
        check('synopsis', 'invalid.sinopsis').not().isEmpty(),
        check('url', 'invalid.url').not().isEmpty(),
        check('photo', 'invalid.photo').not().isEmpty(),
        check('releaseYear', 'invalid.releaseYear').not().isEmpty(),
        check('mainGenre', 'invalid.mainGenre').not().isEmpty(),
        check('director', 'invalid.director').not().isEmpty(),
        check('producer', 'invalid.producer').not().isEmpty(),
        check('type', 'invalid.tye').not().isEmpty(),
    ]

router.get('/',MediaController.getMedia);
router.get('/:id',MediaController.getOneMedia)
router.post('/',MediaController.createMedia);
router.put('/:id',MediaController.updateMedia);
router.delete('/:id',MediaController.deleteMedia);


export default router;