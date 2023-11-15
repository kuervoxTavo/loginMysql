import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";

// Crear multiple rutas
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);


export default router;
