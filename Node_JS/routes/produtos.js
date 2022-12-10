const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    });
});

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere um produto'
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produtos', (req, res, next) => {
    const id = req.params.id_produtos

    if(id === 'unico') {
        res.status(200).send({
            mensagem: 'Id Unico',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        });
    }
        
});

// ALTERA PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando PATCH'
    });
});

// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando DELETE'
    });
});

module.exports = router;