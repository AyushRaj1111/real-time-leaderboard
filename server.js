const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const authRoutes = require('./routes/auth');
const scoreRoutes = require('./routes/scores');
const leaderboardRoutes = require('./routes/leaderboard');
const { verifyToken } = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 5000;

const redisClient = redis.createClient();

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.log('Redis error: ', err);
});

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/scores', verifyToken, scoreRoutes);
app.use('/leaderboard', verifyToken, leaderboardRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
