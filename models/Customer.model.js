const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    email: {type: 'String', required: true},
    name: {type : String, required: true},
    address: {type : String, required: true},
    contact: {type : Number, required: false},
});
const Customer = mongoose.model('customers', customerSchema);
module.exports = Customer;