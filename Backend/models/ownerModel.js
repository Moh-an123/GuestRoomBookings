const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobilenumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
    rooms: { type: Number, required: true },
    image: [{ type: String }],
    owner:{type:Boolean,required:true}
});

module.exports = mongoose.model('OwnerDetail', ownerSchema, 'ownerdetails');