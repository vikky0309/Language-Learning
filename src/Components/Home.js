import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this CSS file for custom styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Language Learning App</h1>
      <p>Choose an activity to start learning:</p>
      <div className="nav-links">
        <Link to="/flashcards" className="nav-link">Flashcards</Link>
        <Link to="/quiz" className="nav-link">Quiz</Link>
        <li><Link to="/progress">Progress</Link></li>
          <li><Link to="/dailygoals">Daily Goals</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
      </div>
    </div>
  );
};

export default Home;

