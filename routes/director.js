import express from "express";
import directorController from "../controllers/director.js";
import { validationResult,check } from "express-validator";


const route = express.Router();

const validateDirector =[
    check('name','invalid.name').not().isEmpty(),
    check('state','invalid.state').isIn(['Active','Inactive'])
]
route.post('/', validateDirector,directorController.createDirector)
route.put('/:id',validateDirector,directorController.updateDirector)


export default route;