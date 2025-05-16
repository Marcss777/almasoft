1


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
