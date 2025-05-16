const db = require('../../../db');

// Registrar un movimiento
async function registrarMovimiento(req, res) {
  console.log("Datos recibidos del cliente:", req.body);
  const { producto_id, cantidad, motivo, notas, rol } = req.body;

  if (!producto_id || cantidad == null || !motivo || !rol) {
    return res.status(400).json({ error: 'Faltan datos necesarios' });
  }

  if (rol !== 'Entrada' && rol !== 'Salida') {
    return res.status(400).json({ error: 'El rol debe ser "suma" o "resta"' });
  }

  try {
    // Insertar movimiento
    const queryMovimiento = `
      INSERT INTO movimientos (producto_id, cantidad, motivo, notas, rol)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const valuesMovimiento = [producto_id, cantidad, motivo, notas, rol];
    const resultMovimiento = await db.query(queryMovimiento, valuesMovimiento);

    // Actualizar stock dependiendo del rol
    const operador = rol === 'Entrada' ? '+' : '-';
    const queryActualizarStock = `
      UPDATE productos 
      SET stock = stock ${operador} $1 
      WHERE id = $2 RETURNING *`;
    const valuesActualizarStock = [cantidad, producto_id];
    const resultActualizarStock = await db.query(queryActualizarStock, valuesActualizarStock);

    if (resultActualizarStock.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(201).json({ 
      mensaje: 'Movimiento registrado y stock actualizado',
      movimiento: resultMovimiento.rows[0], 
      stock: resultActualizarStock.rows[0].stock 
    });

  } catch (error) {
    console.error('Error al registrar movimiento:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  registrarMovimiento
};
