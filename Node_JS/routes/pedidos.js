const express = require('express');
const router = express.Router();

// RETORNA OS PEDIDO
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os Pedidos'
    });
});

// INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    
    const pedido = {
        id_produto: req.body.id_produto,
        quatidade: req.body.quatidade,
    };
    res.status(201).send({
        mensagem:  'Pedido Criado.',
        pedidoCriado: pedido
    });
});

// RETORNA OS DADOS DE UM PEDIDO
router.get('/id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    res.status(200).send({
        mensagem: 'Dados do Pedido',
        id_pedido: id
    });
});

// PEDIDO EXCLUIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido Excluido'
    });
});

module.exports = router;