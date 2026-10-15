const { getHello, GetPedidos, createUser, GetPedidoPorId, GetPedidosxArea } = require('../controllers/Main');
const express = require('express');
const router = express.Router();

router.get('/', getHello);
router.get('/Pedidos', GetPedidos)
router.get('/Pedidos/:id', GetPedidoPorId);
router.get('/Pedidos/Area/:Area', GetPedidosxArea);
module.exports = { router };