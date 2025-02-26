import express from "express";
import typeController from "../controllers/type";

const route = express.Router();

// route.post ('/', typeController.createType)
route.get ('/', typeController.getAllTypes)

export default route;