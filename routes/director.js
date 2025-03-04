import express from "express";
import directorController from "../controllers/director.js";
import { validationResult, check } from "express-validator";

const router = express.Router();

const validateDirector = [
  check("name", "invalid.name").not().isEmpty(),
  check("state", "invalid.state").isIn(["Active", "Inactive"]),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    next();
  },
];

router.get("/", directorController.getAllDirectors);
router.post("/", validateDirector, directorController.createDirector);
router.put("/:id", validateDirector, directorController.updateDirector);
router.get("/", directorController.getAllDirectors);

export default router;
