import TypeController from '../controllers/type.js';
import express from 'express';
import { validationResult, check } from 'express-validator';




const router = express.Router();
const validateType = [
    check("serial", "invalid.serial").not().isEmpty(),
    check("title","invalid.title").not().isEmpty(),
    check("synopsis","invalid.sinopsis").not().isEmpty(),
    check("url","invalid.url").not().isEmpty(),
    check("photo","invalid.photo").not().isEmpty(),
    check("release year","invalid.year").not().isEmpty(),
    check("Main genre","invalid.genre").not().isEmpty(),
    check("director","invalid.director").not().isEmpty(),
    check("producer","invalid.producer").not().isEmpty(),
    check("type","invalid.type").not().isEmpty(),
    function (req, res, next){
        const errors = validationResult (req);
        if (!errors.isEmpty()) {
            return res.status(400).json ({message: errors.array()});
        }
        next();
    }
]



router.get('/', TypeController.getAllTypes);
router.post('/', validateType,TypeController.createType);
router.put('/:id',validateType, TypeController.updateType);

export default router;