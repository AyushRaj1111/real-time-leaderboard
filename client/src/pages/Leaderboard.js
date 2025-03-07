import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/api/leaderboard/global');
        setLeaderboard(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Global Leaderboard</h1>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>
            {index + 1}. User ID: {entry.userId}, Score: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
