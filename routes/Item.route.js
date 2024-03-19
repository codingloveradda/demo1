const itemRoute = require('express').Router();
const { createProduct, checkAvailability } = require('../controllers/Item.controller');

itemRoute.post('/create', createProduct);
itemRoute.post('/check', checkAvailability);

module.exports = itemRoute