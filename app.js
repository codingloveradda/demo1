const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const customerRoute = require('./routes/Customer.route');
const orderRoute = require('./routes/Order.route');
const itemRoute = require('./routes/Item.route');

// middleware
app.use(cors());
app.use(bodyParser.json());
connectDB();

// Routes Middleware
// http://localhost:3000/customer/create   {email, name, address, contact} 
app.use("/customer", customerRoute);
app.use("/order", orderRoute);
app.use("/item", itemRoute);

module.exports = app;