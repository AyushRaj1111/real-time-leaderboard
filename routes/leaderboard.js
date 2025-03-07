const express = require('express');
const redis = require('redis');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();
const redisClient = redis.createClient();

router.get('/global', async (req, res) => {
  try {
    const leaderboard = await redisClient.zrevrange('leaderboard:global', 0, 9, 'WITHSCORES');
    const formattedLeaderboard = [];
    for (let i = 0; i < leaderboard.length; i += 2) {
      formattedLeaderboard.push({ userId: leaderboard[i], score: leaderboard[i + 1] });
    }
    res.status(200).json(formattedLeaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching global leaderboard', error });
  }
});

router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const rank = await redisClient.zrevrank('leaderboard:global', userId);
    const score = await redisClient.zscore('leaderboard:global', userId);
    res.status(200).json({ userId, rank, score });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user ranking', error });
  }
});

router.get('/top-players-report', async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required query parameters' });
  }

  try {
    const reportKey = `top-players-report:${startDate}:${endDate}`;
    const report = await redisClient.zrevrange(reportKey, 0, 9, 'WITHSCORES');
    const formattedReport = [];
    for (let i = 0; i < report.length; i += 2) {
      formattedReport.push({ userId: report[i], score: report[i + 1] });
    }
    res.status(200).json(formattedReport);
  } catch (error) {
    res.status(500).json({ message: 'Error generating top players report', error });
  }
});

module.exports = router;
