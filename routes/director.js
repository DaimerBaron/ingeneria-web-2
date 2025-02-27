import express from "express";
import directorController from "../controllers/director.js";
import { validationResult,check } from "express-validator";
import director from "../controllers/director.js";


const route = express.Router();

const validateDirector =[
    check('name','invalid.name').not().isEmpty(),
    check('state','invalid.state').isIn(['Active','Inactive']),
        function (req, res, next){
            const errors = validationResult (req);
            if (!errors.isEmpty()) {
                return res.status(400).json ({message: errors.array()});
            }
            next();
        }
    ]

route.get('/', directorController.getAllDirectors)
route.post('/', validateDirector,directorController.createDirector)
route.put('/:id',validateDirector,directorController.updateDirector)


export default route;