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
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const port = 3000;
// const app = express();

// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.json());

// mongoose.set('strictQuery', false);

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://mohanraj08022004:Mohanraj%40123@spidey7.3vmmauu.mongodb.net/GuestRoom?retryWrites=true&w=majority&appName=Spidey7', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected successfully to MongoDB'))
// .catch(err => console.error('Error connecting to MongoDB:', err));

// // Define a schema and model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number
// });

// const User = mongoose.model('User', userSchema);

// app.post('/create', async (req, res) => {
//     const { name, email, age } = req.body;
//     const user = new User({
//         name,
//         email,
//         age
//     });
   
   
//     console.log("I am called");
//     const users = await User.findOne({ email: email });
//     if(users){  
//     console.log(users);
//     res.status(201).json("already exists")
//     }
//     else{
//       try{
//         const newUser = await user.save();
//         res.status(201).json("success");
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
//   }

// });
// app.get('/', (req, res) => {
//     const html = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//         <title>My Page</title>
//     </head>
//     <body>
//         <h1>Welcome to my page!</h1>
//     </body>
//     </html>
//     `;
//     res.send(html);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });