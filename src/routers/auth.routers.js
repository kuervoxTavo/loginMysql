import { Router } from "express";
import {
  home,
  login,
  logout,
  register,
} from "../controllers/auth.controllers.js";
import { authRequire } from "../middlewares/validateToken.js";

// Crear multiple rutas
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Ruta protegida inicio requiere autenticacion
router.get("/home", authRequire, home);

export default router;
