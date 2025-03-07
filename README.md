# Real-Time Leaderboard System

## Project Description

This project is an imaginary real-time leaderboard system that ranks users based on their scores in various games or activities. The system includes user authentication, score submission, leaderboard updates, user rankings, and top players report generation.

## Requirements

- **User Authentication**: Users should be able to register and log in to the system.
- **Score Submission**: Users should be able to submit their scores for different games or activities.
- **Leaderboard Updates**: Display a global leaderboard showing the top users across all games.
- **User Rankings**: Users should be able to view their rankings on the leaderboard.
- **Top Players Report**: Generate reports on the top players for a specific period.
- **Leaderboard Storage**: Use Redis sorted sets to store and manage leaderboards.
- **Real-Time Updates**: Utilize Redis sorted sets for efficient real-time updates and queries.
- **Rank Queries**: Use Redis commands to query user ranks and leaderboard positions.

## Instructions for Setting Up and Running the Project

### Prerequisites

- Node.js
- Redis

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start Redis server:
   ```sh
   redis-server
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```sh
   cd client
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

### Accessing the Application

- Open your browser and navigate to `http://localhost:3000` to access the frontend.
- The backend server will be running on `http://localhost:5000`.
