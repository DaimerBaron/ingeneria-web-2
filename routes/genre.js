import genreController from "../controllers/genre.js";
import express from "express";
import { validationResult, check } from "express-validator";

const validateGenre = [
  check("name", "invalid.name").not().isEmpty(),
  check("state", "invalid.state").isIn(["Active", "Inactive"]),
  check("description", "invalid.description").not().isEmpty(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    next();
  },
];

const router = express.Router();
router.get("/", genreController.getAllGenres);
router.post("/", validateGenre, genreController.createGenre);
router.put("/:id", validateGenre, genreController.updateGenre);

export default router;
