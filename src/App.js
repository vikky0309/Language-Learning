// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Learning from './Components/Learning';
import Quiz from './Components/Quiz';
import Progress from './Components/Progress';
import DailyGoals from './Components/DailyGoals';
import Leaderboard from './Components/Leaderboard';
import Settings from './Components/Settings'
import Translate from './Components/Translate.js';
//import Auth from './Components/Auth.js';
//import Profile from './Components/Profile.js';/



function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Language Learning</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learning">Learning</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz">Quiz</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Translate">Translate</Link>
                </li>
      
  
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/quiz" element={<Quiz />} />
  <Route path="/progress" element={<Progress />} />
  <Route path="/dailygoals" element={<DailyGoals />} />
  <Route path="/leaderboard" element={<Leaderboard />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/learning" element={<Learning />}  />
  <Route path="/Translate" element={<Translate />} />
   {/* Add this line */}
</Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

