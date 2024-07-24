const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    
    try {
        await mongoose.connect('mongodb+srv://mohanraj08022004:Mohanraj%40123@spidey7.3vmmauu.mongodb.net/GuestRoom?retryWrites=true&w=majority&appName=Spidey7', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected successfully to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;