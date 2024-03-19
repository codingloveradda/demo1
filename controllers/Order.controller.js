const Order = require('../models/Order.model');
const Item = require('../models/Item.model');
const Customer = require('../models/Customer.model');
const createOrder = async (req, res) => {
    const {customer, items} = req.body;
      
    try {
        const items = await Item.find({items }, { quantity: { $gt: 0 } });

        // Calculate price for all items
        const finalPrice = items.reduce((item) => item.price);

        // Order items by quantity
        const order = await Order.save(
            {
                customer, 
                items, 
                itemPrice: finalPrice,
                orderStatus: "Pending"
            }
            );
             
            return res.json({
                "message": "Order placed successfully",
                'data': result,
                'status': 201,
                'success': true
            });
       
    }catch(err){
        return res.json({
            "message": err.message,
            "status": err.status,
            "success": false
        });
    }

     
}

const updateOrder = async (req, res) => {
    const {_id, orderStatus} = req.body;
      
    try {
        const updatedOrder = await Order.findOneAndUpdate({_id }, { $set: { orderStatus } }, { new: true } );
            return res.json({
                "message": "Order status updated successfully",
                'data': updatedOrder,
                'status': 201,
                'success': true
            });
       
    }catch(err){
        return res.json({
            "message": err.message,
            "status": err.status,
            "success": false
        });
    }

     
}

const fetchOrder = async (req, res) => {
    const {_id} = req.body;
    try {
        const order = await Order.find({_id}).populate('items').populate('customer'); 
        
        return res.json({
            "message": "Order feched successfully",
            'data': order,
            'status': 200,
            'success': true
        });
    }catch (err) {
        return res.json({
            "message": err.message,
            'data': null,
            'status': err.status,
            'success': false
        });
    }
     

};

module.exports = {createOrder, updateOrder, fetchOrder }