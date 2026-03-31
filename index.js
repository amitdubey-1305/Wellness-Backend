// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const mySessionRoutes = require('./routes/mySessions');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/wellness';
mongoose.connect(mongoURL)
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => console.error(' MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', authMiddleware, dashboardRoutes);  // protect dashboard
app.use('/my-sessions', authMiddleware, mySessionRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Wellness API is running');
});

// Global error handling
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Catch unhandled rejections and exceptions
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
