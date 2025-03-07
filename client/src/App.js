import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Leaderboard from './pages/Leaderboard';
import UserRanking from './pages/UserRanking';
import TopPlayersReport from './pages/TopPlayersReport';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/user-ranking" component={UserRanking} />
          <Route path="/top-players-report" component={TopPlayersReport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
