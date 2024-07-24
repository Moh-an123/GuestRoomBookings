const express = require('express');
const router = express.Router();
const AllUser=require('../models/allUserModel')
router.get('/logindata', async (req, res) => {
    const { email, password } = req.query;  // Note the use of req.query instead of req.body
    console.log(email,password);
    try {
        // Find user by email
        const user = await AllUser.findOne({ email });
  
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found", });
        }

        // Compare passwords
        // Note: In a real application, you should never store or compare plain-text passwords
        if (password !== user.password) {
            return res.status(400).json({ success: false, message: "Invalid credentials",data:user });
        }

        // User authenticated
        res.json({ 
            success: true, 
            user: { 
                email: user.email, 
                owner: user.owner 
            } 
        });

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;