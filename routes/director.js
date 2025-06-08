import express from "express";
import directorController from "../controllers/director.js";
import { validationResult, check } from "express-validator";
import { requireRole } from "../middleware/role.js";

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
router.post("/", requireRole, validateDirector, directorController.createDirector);
router.put("/:id", validateDirector, directorController.updateDirector);
router.delete("/:id", directorController.deleteDirector); 

export default router;
