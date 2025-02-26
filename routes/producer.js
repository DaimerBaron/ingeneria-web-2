import express from "express";
import { check, validationResult } from "express-validator";
import producerController from "../controllers/producer.js";

const router = express.Router();
const validateProducer = [
  check("name", "invalid.name").not().isEmpty(),
  check("state", "invalid.state").isIn(["Active", "Inactive"]),
  check("slogan", "invalid.slogan").not().isEmpty(),
  check("description", "invalid.description").not().isEmpty(),
];

router.post("/", validateProducer, producerController.createProducer);
router.put("/:id", validateProducer, producerController.updateProducer);


export default router;