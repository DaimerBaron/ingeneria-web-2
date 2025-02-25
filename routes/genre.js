import genreController from '../controllers/genre.js';
import express from 'express';


const router = express.Router();

router.get('/', genreController.getAllGenres);
router.get('/:id', genreController.getGenre);
router.post('/', genreController.createGenre);
router.put('/:id', genreController.updateGenre);

export default router;