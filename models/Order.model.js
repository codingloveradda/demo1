const mongoose = require('mongoose');
const orderStatusEnum = ['pending', 'progress', 'confirmed'];
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    items: [{ type: Schema.Types.ObjectId, ref: 'Items' }],
    itemPrice: {type : String, required: true},
    orderStatus: {
        type : Boolean,
        enum : ["pending", "inprogress", "confirmed"],
        default: "pending",
        required: true},
    orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;