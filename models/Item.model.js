const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {type : String, required: true},
    description: {type : String, required: true},
    price: {type : String, required: true},
    state: {type : Boolean, required: true, Default: true},
    quantity: {type : Number, required: false}
});

const Item = mongoose.model('items', itemSchema);
module.exports = Item;