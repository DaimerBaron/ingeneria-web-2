import TypeController from '../controllers/type.js';
import express from 'express';
import { validationResult, check } from 'express-validator';




const router = express.Router();
const validateType = [
    check('name', 'invalid.name').not().isEmpty(),
    check('description', 'invalid.description').not().isEmpty(),
    
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