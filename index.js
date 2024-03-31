// app.js or index.js

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://ssrikalai2255:SriSiva1409@clothapp.pwvrku6.mongodb.net/?retryWrites=true&w=majority&appName=ClothApp', {}).then(() => {
    console.log('MongoDB connected');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Middleware
app.use(express.json());


app.use('/images', express.static('images'));

// Routes
app.use('/products', productRoutes);
app.use('/getid', productRoutes);
app.use('/cart',cartRoutes);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
