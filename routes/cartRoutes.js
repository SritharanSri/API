const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

router.post('/cart', async (req, res) => {
    try {
        // Create a new cart entry with the data from the request body
        const { productId, quantity } = req.body;
        const cartItem = { productId, quantity, price };
        const cart = await Cart.create({ products: [cartItem] });

        // Respond with the created cart entry
        res.status(201).json(cart);
    } catch (error) {
        // Handle any errors that occur during cart creation
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/cart/get', async (req, res) => {
    try {
        // Fetch all cart entries
        const carts = await Cart.find();

        // Respond with the fetched cart entries
        res.status(200).json(carts);
    } catch (error) {
        // Handle any errors that occur during cart retrieval
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router;
