const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },   
    price: {
        type: Number,
        required: true
    },
    imageUrl: String,
    category: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
    // Add more fields as needed
});

module.exports = mongoose.model('Product', productSchema);
