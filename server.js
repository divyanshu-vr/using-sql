// Load environment variables
require('dotenv').config();

// Import required packages
const express = require('express');
const { Client } = require('pg');

// Initialize Express app
const app = express();

// PostgreSQL connection configuration
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to PostgreSQL
client.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is the Express server with PostgreSQL connection!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});