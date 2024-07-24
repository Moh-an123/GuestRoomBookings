const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel');
const AllUser=require('../models/allUserModel')
// ... existing routes ...

router.post('/customer-signup', async (req, res) => {
    const { name, email, number, password } = req.body;

    try {
        // Check if email or number already exists
        const existingCustomer = await Customer.findOne({ 
            $or: [{ email: email }, { number: number }] 
        });

        if (existingCustomer) {
            return res.status(400).json({ message: "Email or number already exists" });
        }

        const newCustomer = new Customer({
            name,
            email,
            number,
            password
        });
        const newAllUser = new AllUser({
            email,
            password,
            owner:false
         });
 
         await newAllUser.save();
        await newCustomer.save();
        res.status(201).json({ message: "Customer registered successfully",data:newCustomer });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;