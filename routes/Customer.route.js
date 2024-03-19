const customerRoute = require('express').Router();
const createCustomer = require('../controllers/Customer.controller');

customerRoute.post('/create', createCustomer);

module.exports = customerRoute