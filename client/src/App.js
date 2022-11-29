import React, { useState, useEffect } from 'react';
import './App.css';
import KillsPerPlayer from './components/KillsPerPlayer';
import { getAverageRoundLength } from './api/api.service'
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState(0)
  useEffect(() => {
    getAverageRoundLength()
      .then(x => {
        setScore(x);
      });
  }, [score])

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <h1 style={{color:'white'}}> CS GO match notes</h1>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h1>Score Board</h1>
            <Scoreboard />
          </div>
          <div class="col-sm">
            <h1>Round length average</h1>
            <h3>{score} minutes</h3>
          </div>
          <div class="col-sm">
            <h1>Kills Per Players </h1>
            <KillsPerPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
