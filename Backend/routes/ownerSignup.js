const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const OwnerDetail = require('../models/ownerModel');
const AllUser = require('../models/allUserModel'); // Make sure to create this model

router.post('/owner-signup', async (req, res) => {
    const { name, email, mobilenumber, password, address, location, rooms, image, owner } = req.body;

    try {
        // Check if email or mobile number already exists
        const existingOwner = await OwnerDetail.findOne({ 
            $or: [{ email: email }, { mobilenumber: mobilenumber }] 
        });

        if (existingOwner) {
            return res.status(400).json({ message: "Email or mobile number already exists" });
        }

        const newOwner = new OwnerDetail({
            name,
            email,
            mobilenumber,
            password,
            address,
            location,
            rooms,
            image,
            owner
        });
    
        await newOwner.save();

        // Add owner data to allusers collection
        const newAllUser = new AllUser({
           email,
           password,
           owner
        });

        await newAllUser.save();

        res.status(201).json({ message: "Owner registered successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;