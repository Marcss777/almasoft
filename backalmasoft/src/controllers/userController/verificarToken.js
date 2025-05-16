const jwt = require('jsonwebtoken');

// Middleware para verificar el token
function verificarToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], 'tu_secreto'); // Extrae el token después de "Bearer"
    req.usuario = decoded; // Añade el usuario al request
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = { verificarToken };
