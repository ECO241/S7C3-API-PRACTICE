const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const usuarioRouter = require('./routes/usuario');
const personajeRouter = require('./routes/personaje');
const artefactoRouter = require('./routes/artefacto');

app.use('/usuarios', usuarioRouter);
app.use('/personajes', personajeRouter);
app.use('/artefactos', artefactoRouter);


module.exports = app;
