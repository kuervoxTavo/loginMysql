// Encripta el password, y verifica si coincide
import bcryptjs from "bcryptjs";

// Importa la conexion a la base de datos
import { pool } from "../db/db.js";
import { createToken } from "../libs/jwt.js";

/* Registro de un nuevo usuario */
export const register = async (req, res) => {
  // Recibe el la informacion del usuario a insertar
  const { id_empleado, user, password, tipo } = req.body;

  try {
    /* Verifica si no existe el usuario */
    const [duplicado] = await pool.query(`select * from users where user = ?`, [
      user,
    ]);

    /* Envia un mensaje de erro  */
    if (duplicado.length !== 0) return res.sendStatus(404);

    /* Encripta la contraseña */
    const passwordHash = await bcryptjs.hash(password, 10);

    /* Inserta el usuario en la base de datos */
    const [result] = await pool.query(`insert into users values (0,?,?,?,?)`, [
      id_empleado,
      user,
      passwordHash,
      tipo,
    ]);

    // Verifica si se afecto la base datos
    // en caso de error envia un error
    if (result.affectedRows === 0) return res.sendStatus(404);

    // Retorna el id insertado del usuario
    res.sendStatus(202);
    
  } catch (error) {
    res.sendStatus(505);
  }
};

/* Registro de un nuevo usuario */
export const login = async (req, res) => {
  // Recibe el la informacion del usuario a insertar
  const { user, password } = req.body;

  try {
    /* Verifica si no existe el usuario */
    const [result] = await pool.query(
      `select u.idusers, u.tipo, e.nombre, u.password
      from logindb.users u, logindb.empleados e 
      where u.id_empleado = e.idempleados and 
      u.user = ? limit 1`,
      [user]
    );

    /* Envia un mensaje de erro  */
    if (result.length === 0) return res.sendStatus(404);

    const usuario = result[0];

    /* Copara la contaseña la contraseña */
    const isMatch = await bcryptjs.compare(password, usuario.password);

    /* Consulta si las contraseña son correctas true o false */
    if (!isMatch) return res.sendStatus(404);

    // Genera un token con el usuario y el tipo
    const token = await createToken({
      id: usuario.idusers,
    });

    /* Responde el token en un cookie */
    res.cookie("token", token);

    /* Responde los datos del usuario */
    res.json({
      idusers: usuario.idusers,
      tipo: usuario.tipo,
      nombre: usuario.nombre,
    });
  } catch (error) {
    res.sendStatus(505);
  }
};

/* cierra la session del usuario */
export const logout = (req, res) => {
  // Elimina la cookie
  res.cookie("token", "", { expires: new Date(0) });

  res.sendStatus(200);
};

/* Funcion protegida  */

export const home = async (req, res) => {
  console.log(req.user.id);

  /* Verifica si no existe el usuario */
  const [result] = await pool.query(
    `select e.nombre , u.tipo 
    from logindb.users u, logindb.empleados e 
    where u.id_empleado = e.idempleados and 
    u.idusers = ?`,
    [req.user.id]
  );

  /* Envia un mensaje de erro  */
  if (result.length === 0) return res.sendStatus(404);

  const usuario = result[0];

  res.json({
    idusers: req.user.id,
    nombre: usuario.nombre,
    tipo: usuario.tipo,
  });
  
};
