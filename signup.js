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

const connectDB = require('../db');
const User = require('../models/User');

module.exports = async (req, res) => {

    await connectDB();

    if (req.method === 'POST') {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username});
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists"});
      }

      //create a new user
      const newUser = new User({
        username,
        password,
      });

      try {
        await newUser.save();
        res.status(201).json({ message: "User signed up successfully!"});
      } catch (error) {
        res.status(500).json({ message: "Error saving user to database"});
        console.error(error);
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('method ${req.method} Not Allowed');
    }
  };

  const bcrypt = require('bcrypt');

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    username,
    password: hashedPassword,
  });

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});

// Sign-up API
app.post('/api/signup', (req, res) => {
    res.json({ message: 'Sign-up successful', userId: 'generatedUserId' });
  });

  //Start the server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));