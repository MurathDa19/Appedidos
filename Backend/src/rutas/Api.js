const { getHello, GetPedidos, GetPedidoPorId, GetPedidosxArea, GetPedidoxEstado } = require('../Controllers/Main');
const express = require('express');
const router = express.Router();

router.get('/', getHello);
router.get('/Pedidos', GetPedidos)
router.get('/Pedidos/:id', GetPedidoPorId);
router.get('/Pedidos/Area/:Area', GetPedidosxArea);
router.get('/Pedidos/Estado/:Estado', GetPedidoxEstado)
module.exports = { router };