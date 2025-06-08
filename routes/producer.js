import express from "express";
import { check, validationResult } from "express-validator";
import producerController from "../controllers/producer.js";
import { requireRole } from "../middleware/role.js";

const router = express.Router();
const validateProducer = [
  check("name", "invalid.name").not().isEmpty(),
  check("state", "invalid.state").isIn(["Active", "Inactive"]),
  check("slogan", "invalid.slogan").not().isEmpty(),
  check("description", "invalid.description").not().isEmpty(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", producerController.getAllProducers);
router.post("/",requireRole, validateProducer, producerController.createProducer);
router.put("/:id", validateProducer, producerController.updateProducer);
router.delete("/:id",producerController.deleteProducer); 

export default router;