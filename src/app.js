// Importa el modulo de express
import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'


// Rutas de autentificacion
import authRoutes from './routers/auth.routers.js'


const app = express();

app.use(morgan("dev"));
app.use(express.json()); // Recibir json
app.use(cookieParser()); // Leer cookies del navegador


// Rutas de autentificacion
app.use("/api", authRoutes);






export default app;
