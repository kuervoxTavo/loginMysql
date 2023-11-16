import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

/* Funcion para verificar la existencia de un token */

export const authRequire = (req, res, next) => {
  /* Recupera el token de las cookies, con la libreria cookie-parse
    para convertir las cookies en objeto, despues de desestrutura */

  const { token } = req.cookies;

  // Si no existe un token
  if (!token) return res.sendStatus(401);

// Verifica el toke si existe el token
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
 
    // Agrega propiedad al objeto req
    req.user = user;

    // Continua con la siguiente funcion
    next();
  });
};
