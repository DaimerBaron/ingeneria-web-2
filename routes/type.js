import TypeController from '../controllers/type.js';
import express from 'express';


const router = express.Router();

router.get('/', TypeController.getAllTypes);
router.post('/', TypeController.createType);
router.put('/:id', TypeController.updateType);

export default router;