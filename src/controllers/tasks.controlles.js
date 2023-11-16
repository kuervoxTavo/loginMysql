// Importa la conexion a la base de datos
import { pool } from "../db/db.js";

// Todas las tareas del usuario q inicio session
export const getTasks = async (req, res) => {
  const [tasks] = await pool.query(`select * from taks where id_users = ?`, [
    req.user.id,
  ]);

  res.json(tasks);
};

// Una tarea especifica q sea del usuario
export const getTask = async (req, res) => {
  const [task] = await pool.query(
    `select * from taks where idTaks = ? and id_users = ?`,
    [req.params.id, req.user.id]
  );

  /* Envia un mensaje de erro  */
  if (task.length === 0) return res.sendStatus(404);

  res.json(task);
};

// Crea una tarea
export const createTasks = async (req, res) => {
  const { titulo, descripcion } = req.body;

  const [ins] = await pool.query(`insert into taks values (0,?,?,?)`, [
    req.user.id,
    titulo,
    descripcion,
  ]);

  // Verifica si se afecto la base datos
  // en caso de error envia un error
  if (ins.affectedRows === 0) return res.sendStatus(404);

  // Retorna el id insertado del usuario
  res.send({ id: ins.insertId });
};

// Elimina una tarea
export const deleteTasks = async (req, res) => {
  const [del] = await pool.query(`delete from taks where idTaks = ?`, [
    req.params.id,
  ]);

  // Verifica si se afecto la base datos
  // en caso de error envia un error
  if (del.affectedRows === 0) return res.sendStatus(404);

  // Retorna el id insertado del usuario
  res.sendStatus(202);
};

// Update de tarea
export const updateTasks = async (req, res) => {
  const { titulo, descripcion } = req.body;

  const [upd] = await pool.query(
    `update taks set titulo = ?, descripcion = ? where idtaks = ?`,
    [titulo, descripcion, req.params.id]
  );

  // Verifica si se afecto la base datos
  // en caso de error envia un error
  if (upd.affectedRows === 0) return res.sendStatus(404);

  res.sendStatus(202);
};

/* 

       // llenado de la base de datos de treas

  const [usuarios] = await pool.query(`select idusers from users`);

  usuarios.map(async (u, index) => {
    const idusers = u.idusers;

    for (let x = index; x < index * 10 + 10; x++) {

      const [ins] = await pool.query(
        `insert into taks values (0,?,?,?)`,
        [idusers, datos[x].author,
        datos[x].quote]
      );

      if(ins.affectedRows > 0) console.log('ok...');
    }
  });


*/
