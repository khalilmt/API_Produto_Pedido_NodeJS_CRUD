const express = require('express');
const app = express();
const morgan = require('morgan');


const rotaPedidos = require('./routes/pedidos');
const rotaProdutos = require('./routes/produtos');

app.use(morgan('dev'));

app.use('/pedidos', rotaPedidos);
app.use('/pedidos', rotaProdutos);

app.use((req, res, next) => {
    const erro = new Error('Nao encontrado');
    erro.status = 404;
    next(erro);

});

app.use((erro, req, res, next) => {
    res.status(erro.status || 500);
    return res.send({
        erro: {
            mensagem: erro.message
        }
    });
});

module.exports = app;