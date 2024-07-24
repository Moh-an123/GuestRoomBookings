const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/hello', async(req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Are you happy!</h1>
    </body>
    </html>
    `;
    res.send(html);
});
module.exports = router;