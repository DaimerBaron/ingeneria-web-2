import { Router } from "express";
import userController from "../controllers/user.js";
import { requireRole } from "../middleware/role.js";

const router = Router();

router.post("/", requireRole, userController.createUser);
router.post("/login", userController.login);

export default router;