const orderRoute = require('express').Router();
const {createOrder, updateOrder, fetchOrder } = require('../controllers/Order.controller');

orderRoute.post('/create', createOrder);
orderRoute.post('/update', updateOrder);
orderRoute.post('/fetch', fetchOrder);

module.exports = orderRoute

