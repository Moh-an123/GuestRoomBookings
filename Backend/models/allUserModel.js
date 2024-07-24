const mongoose = require('mongoose');

const allUserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   owner:{type:Boolean,required:true}
});

module.exports = mongoose.model('AllUser', allUserSchema, 'allusers');