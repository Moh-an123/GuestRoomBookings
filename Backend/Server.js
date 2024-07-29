const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require('./config/database.js');
const userRoutes = require('./routes/userRoutes');
const signUp=require('./routes/ownerSignup.js');
const customerSignup=require('./routes/customerSignup.js');
const getDetail=require('./routes/getdetails.js')
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/users', userRoutes);
app.use('/',signUp);
app.use('/',customerSignup);
app.use('/',getDetail);
app.use('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Welcome to my page!</h1>
    </body>
    </html>
    `;
    res.send(html);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
