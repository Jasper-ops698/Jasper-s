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

//Seller Order  (GET)
app.get('/api/seller/orders', (req, res) => {
    res.json({ orderId: 'order001', items: [...], totalAmount: 150, customer: {...} });
  });

  //Start the server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));