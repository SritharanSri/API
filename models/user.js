const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    shippingAddress: String,
    created_date: {
        type: Date,
        default: Date.now
    },
    phoneNumber: {
        type: Number,
        minlength: 10,
        required: true
    },
    DateOfBirth:{
        type :Date,
        required:true
    },
    Gender:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('User', userSchema);
