import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const createToken = (payload) => {
  //******* */
  return new Promise((resolve, reject) => {

    // Crea un token web
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        // En caso que todo este bien
        resolve(token);
      }
    );
  });
};
