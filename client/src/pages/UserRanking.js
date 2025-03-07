import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserRanking = () => {
  const [userRanking, setUserRanking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserRanking = async () => {
      try {
        const response = await axios.get('/api/leaderboard/user/:userId');
        setUserRanking(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUserRanking();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Ranking</h1>
      {userRanking ? (
        <div>
          <p>User ID: {userRanking.userId}</p>
          <p>Rank: {userRanking.rank}</p>
          <p>Score: {userRanking.score}</p>
        </div>
      ) : (
        <p>No ranking data available.</p>
      )}
    </div>
  );
};

export default UserRanking;
