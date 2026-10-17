require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const seedData = require('./utils/seedData');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 2000 })
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    setTimeout(() => seedData(), 500);
  })
  .catch((err) => {
    console.log('ℹ️ MongoDB not detected locally; automatically running with persistent JSON storage mode.');
    setTimeout(() => seedData(), 500);
  });

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/groups', require('./routes/groups'));
app.use('/api/expenses', require('./routes/expenses'));

// Seed Endpoint
app.post('/api/seed', async (req, res) => {
  try {
    await seedData();
    res.json({ message: 'Database seeded successfully with rich demo data!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});