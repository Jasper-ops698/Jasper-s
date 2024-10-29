// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { string } = require('yup');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Sample Route
app.get('/', (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});

const isAuthenticatedSeller = (req, res, next) => {
    const { sellerId } = req.body;
  
    if (sellerId) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized seller" });
    }
  };
  
  //Add Product API (for sellers)
  app.post('/api/seller/products', isAuthenticatedSeller, (req, res) => {
    const { sellerId, productName, description, price, pictures, offers, stock } =req.body;
    if (!productName || !price || !pictures) {
      return res.status(400).json({ message: "Required fields are missing"});
    }
  
    const productId = " generatedProductId";
  
    console.log("Saving product to database", { sellerId, productName, description, price, pictures, offers, stock });
  
    res.json({ message: "Product added successfully", productId});
  });

  module.exports = async (req, res) => {
    if (req.method === 'POST') {
      const { sellerId, productName, description, price, pictures, offers, stock } = req.body;
  
  
      res.status(200).json({ message: "Product added successfully!"});
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('method ${req.method} Not Allowed');
    }
  };
  
  const productsDatabase = [];
  
  //Product Schema for MongoDB with Mongoose
  const ProductSchema = new mongoose.Schema({
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },
    productName: { type: String, required: true },
    description: string,
    price: { type: Number, required: true },
    pictures: [String],
    offers: String,
    stock: { type: Number, default: 0 },
    dateAdded: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('product', ProductSchema);

//Start the server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));