const Customer = require('../models/Customer.model');

const createCustomer = async (req, res) => {
    const {email, name, address, contact} = req.body;
    let regex = /^[a-zA-Z]+$/;
     
    if(regex.test(name) == false || !(contact.contains("[a-zA-Z]+") == false && contact.length == 10) || (address.length < 10)){
        return res.json({
            "message": "Please provide valid data",
            "status": 400,
            "success": false
        });

    }  
    try {
        const user = await Customer.findOne({ email: email });
        if(user)    {
            return res.json({
                "message": "Customer already exist this email",
                "status": 409,
                "success": false
            });
        }else {
            const result = await Customer.save({email, name, address, contact });
            return res.json({
                "message": "Data saved successfully",
                'data': result,
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

     
}

module.exports = createCustomer