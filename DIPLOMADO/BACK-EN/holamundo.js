const express = require('express');
const holamundo = express();
const profesores = require('./docente')
holamundo.get('/', async (req, res) =>{
    const respuesta = await profesores.find();
    res.json(respuesta);
});
module.exports = holamundo;
