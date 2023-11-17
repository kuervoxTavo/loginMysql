// Importa el modulo de express
import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'
import cors from "cors";

// Rutas de autentificacion
import authRoutes from './routers/auth.routers.js'
import tasksRoutes from "./routers/tasks.routers.js";


const app = express();


app.use(cors()); // Escuchar peticiones de otro servidor
app.use(morgan("dev"));
app.use(express.json()); // Recibir json
app.use(cookieParser()); // Leer cookies del navegador


// Rutas de autentificacion
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);







export default app;
