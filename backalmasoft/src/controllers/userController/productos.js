const db = require('../../../db');

// Crear producto
async function crearProducto(req, res) {
  const { nombre, categoria, stock, precio } = req.body;

  if (!nombre || !categoria || stock == null || precio == null) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const query = `
      INSERT INTO productos (nombre, categoria, stock, precio)
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [nombre, categoria, stock, precio];
    const result = await db.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Obtener todos los productos
async function obtenerProductos(req, res) {
  try {
    const result = await db.query('SELECT * FROM productos');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Actualizar producto
async function actualizarProducto(req, res) {
  const { id } = req.params;
  const { nombre, categoria, stock, precio } = req.body;

  try {
    const query = `
      UPDATE productos SET nombre=$1, categoria=$2, stock=$3, precio=$4
      WHERE id=$5 RETURNING *`;
    const values = [nombre, categoria, stock, precio, id];
    const result = await db.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Eliminar producto
async function eliminarProducto(req, res) {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
// Obtener producto por ID
async function obtenerProductoPorId(req, res) {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM productos WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener producto por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


module.exports = {
  crearProducto,
  obtenerProductos,
    obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
};
