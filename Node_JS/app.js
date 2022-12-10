const express = require('express');
const app = express();


const rotaPedidos = require('./routes/pedidos');
const rotaProdutos = require('./routes/produtos');

app.use('/pedidos', rotaPedidos);
app.use('/pedidos', rotaProdutos);

module.exports = app;