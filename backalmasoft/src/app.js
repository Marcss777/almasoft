const express = require('express');
const config = require('./config');
const cors = require('cors');
const rutas = require('./rutas/rutas');  // Ahora importamos el archivo rutas.js

const app = express();

app.set('port', config.app.port);
app.use(cors());
app.use(express.json());

// Usar las rutas importadas
app.use(rutas);

module.exports = app;
