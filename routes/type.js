import TypeController from '../controllers/type.js';
import express from 'express';
import { validationResult, check } from 'express-validator';


const router = express.Router();

const validateType =[
    check('name', 'invalid.name').not().isEmpty(),
    check('description', 'invalid.description').not().isEmpty(),
]
router.get('/', TypeController.getAllTypes);
router.get('/:id', TypeController.getType);
router.post('/',validateType, TypeController.createType);
router.put('/:id',validateType, TypeController.updateType);

export default router;