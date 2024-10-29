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


// Customer Order API
app.post('/api/customer/orders', (req, res) => {
  res.json({ message: 'Order placed successfully', orderId: 'generatedOrderId' });
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { CustomerId, productId, quantity } = req.body;


    res.status(200).json({ message: "Order placed successfully!"});
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('method ${req.method} Not Allowed');
  }
};


//Start the server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));