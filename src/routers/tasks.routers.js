import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
import {
  createTasks,
  deleteTasks,
  getTask,
  getTasks,
  updateTasks,
} from "../controllers/tasks.controlles.js";

const router = Router();

/*  Crud de las tareas  */
router.get("/tasks", authRequire, getTasks);
router.get("/tasks/:id", authRequire, getTask);
router.post("/tasks", authRequire, createTasks);
router.delete("/tasks/:id", authRequire, deleteTasks);
router.put("/tasks/:id", authRequire, updateTasks);

export default router;
