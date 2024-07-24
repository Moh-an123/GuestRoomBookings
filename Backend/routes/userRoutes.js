const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/create', async (req, res) => {
    const { name, email, age } = req.body;
    const user = new User({
        name,
        email,
        age
    });
    
    console.log("I am called");
    const users = await User.findOne({ email: email });
    if(users){
        console.log(users);
        res.status(201).json("already exists");
    }
    else{
        try{
            const newUser = await user.save();
            res.status(201).json("success");
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
});

module.exports = router;