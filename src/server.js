require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');

// Middleware
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');
const rateLimiter = require('./middleware/rateLimiter');

app.use(logger);
app.use(rateLimiter);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('I am running');
});

app.use(errorHandler); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});