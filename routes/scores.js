const express = require('express');
const redis = require('redis');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();
const redisClient = redis.createClient();

router.post('/submit', verifyToken, async (req, res) => {
  const { userId, score, game } = req.body;

  if (!userId || !score || !game) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const scoreKey = `leaderboard:${game}`;
    await redisClient.zadd(scoreKey, score, userId);
    res.status(200).json({ message: 'Score submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting score', error });
  }
});

module.exports = router;
