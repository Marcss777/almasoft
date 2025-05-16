const express = require('express');
const userController = require('../controllers/userController/registro');
const Login = require('../controllers/userController/Login');
const serviciosController = require('../controllers/userController/movimientos');
const controller = require('../controllers/userController/productos');

const router = express.Router();

// Definir todas las rutas
router.post('/usuarios', userController.guardarUsuario);
router.post('/login', Login.loginUsuario);
router.get('/usuarios', userController.obtenerUsuarios);
router.use('/api/movimientos', serviciosController.registrarMovimiento);
router.put('/usuarios/actualizar/:id', userController.actualizarUsuario);
router.delete('/usuarios/eliminar/:id', userController.eliminarUsuario);
router.post('/producto', controller.crearProducto);
router.get('/producto/:id', controller.obtenerProductos);
router.put('/producto/actualizar/:id', controller.actualizarProducto);
router.delete('/producto/eliminar/:id', controller.eliminarProducto);
router.get('/producto/porid/:id', controller.obtenerProductoPorId);

module.exports = router;
