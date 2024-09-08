const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Import the auth routes

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount the auth routes at /api/auth
app.use('/api/auth', authRoutes);

// Optional test route to confirm the server is working
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Port from environment variables or fallback to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});