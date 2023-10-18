const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const user = require('./services/auth');
const course = require('./services/course');

// Middleware to parse JSON requests
app.use(express.json());

// Include your route handlers from services
app.use('/auth', user);
app.use('/course', course);

// app.use(require('./services/course'));

// Start the Express app
app.listen(port, () => {
  console.log(`Express app is running on port ${port}`);
});
