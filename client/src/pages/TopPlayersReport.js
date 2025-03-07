import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopPlayersReport = () => {
  const [report, setReport] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (startDate && endDate) {
      fetchReport();
    }
  }, [startDate, endDate]);

  const fetchReport = async () => {
    try {
      const response = await axios.get('/api/leaderboard/top-players-report', {
        params: { startDate, endDate },
      });
      setReport(response.data);
    } catch (error) {
      console.error('Error fetching top players report:', error);
    }
  };

  return (
    <div>
      <h1>Top Players Report</h1>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <button onClick={fetchReport}>Fetch Report</button>
      <ul>
        {report.map((player, index) => (
          <li key={index}>
            User ID: {player.userId}, Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPlayersReport;
