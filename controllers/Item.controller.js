const Item = require('../models/Item.model');
const createProduct = async (req, res) => {
    const {title, description, price, state, quantity} = req.body;
    try {
         
        const result = await Item.save({title, description, price, state, quantity} );
        return res.json({
            "message": "Data saved successfully",
            'data': result,
            'status': 201,
            'success': true
        });
    }catch(err){
        return res.json({
            "message": err.message,
            "status": err.status,
            "success": true
        });
    }    
}

const checkAvailability = async(req, res) => {
    try {
        const items = await Item.find({ quantity: { $gt: 0 } });
        if(items.length > 0){
            return res.json({
                "message": "Items available for order",
                'data': result,
                'status': 201,
                'success': true
            });
        }else {
            return res.json({
                "message": "No items available to order",
                'data': null,
                'status': 201,
                'success': true
            });
        }
         
    }catch(err){
        return res.json({
            "message": err.message,
            "status": err.status,
            "success": true
        });
    }

};

module.exports = { createProduct, checkAvailability }