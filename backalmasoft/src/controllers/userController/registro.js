const db = require('../../../db');
const bcrypt = require('bcrypt');

// Función para guardar un nuevo usuario
async function guardarUsuario(req, res) {
  const { nombreCompleto, correo, password, confirmPassword, rol } = req.body;

  if (!nombreCompleto || !correo || !password || !confirmPassword) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }

  console.log('Datos recibidos del formulario:', req.body);

  try {
    const checkQuery = 'SELECT * FROM users WHERE correo = $1';
    const checkResult = await db.query(checkQuery, [correo]);

    if (checkResult.rows.length > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const rolFinal = rol || 'usuario'; // si no se especifica, asigna 'usuario'

    const query = `
      INSERT INTO users (nombre_completo, correo, password, rol) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [nombreCompleto, correo, hashedPassword, rolFinal];
    const result = await db.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al guardar el usuario:', error.message, error.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


// Función para obtener todos los usuarios
async function obtenerUsuarios(req, res) {
  try {
    const query = 'SELECT * FROM users';
    const result = await db.query(query);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Función para eliminar un usuario
async function eliminarUsuario(req, res) {
  const { id } = req.params;

  try {
    // Verificar si el usuario existe
    const checkQuery = 'SELECT * FROM users WHERE id = $1';
    const checkResult = await db.query(checkQuery, [id]);

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    // Eliminar el usuario
    const query = 'DELETE FROM users WHERE id = $1';
    await db.query(query, [id]);

    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Función para actualizar un usuario
async function actualizarUsuario(req, res) {
  try {
    const { id } = req.params;
    const { nombre_completo, correo, password, rol } = req.body;

    let hashedPassword = null;
    if (password) {
      // Asegúrate de tener bcrypt instalado y requerido
      const bcrypt = require('bcryptjs');
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Construir consulta y valores
    const query = `
      UPDATE users
      SET nombre_completo = $1, correo = $2, password = $3, rol = $4
      WHERE id = $5 RETURNING *;
    `;

    const values = [
      nombre_completo,
      correo,
      hashedPassword || null,
      rol || 'usuario',
      id
    ];

    const result = await db.query(query, values);

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  guardarUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  actualizarUsuario,
};
