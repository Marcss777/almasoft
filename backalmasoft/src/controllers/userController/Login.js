const db = require('../../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controlador para iniciar sesión
async function loginUsuario(req, res) {
  const { correo, password } = req.body;

  try {
    // Verificar si el usuario existe
    const query = 'SELECT * FROM users WHERE correo = $1';
    const result = await db.query(query, [correo]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const user = result.rows[0];

    // Comparar la contraseña ingresada con la almacenada
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Generar un token (opcional)
    const token = jwt.sign({ id: user.id, correo: user.correo, rol: user.rol }, 'tu_secreto', { expiresIn: '1h' });

    // Devolver el usuario y el token
    res.json({
      user: {
        id: user.id,
        nombre_completo: user.nombre_completo ,
        correo: user.correo,
        rol: user.rol
      },
      token
    });

  } catch (error) {
    console.error('Error al iniciar sesión:', error.message, error.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Controlador para cerrar sesión
async function logoutUsuario(req, res) {
  res.json({ message: 'Sesión cerrada exitosamente' });
}
module.exports = { loginUsuario, logoutUsuario };
