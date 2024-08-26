import React, { useState, useEffect } from 'react';
import './DailyGoals.css';

// src/Components/DailyGoals.js

const DailyGoals = () => {
  const [goal, setGoal] = useState('');
  const [currentGoal, setCurrentGoal] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Load the goal from localStorage if available
    const savedGoal = localStorage.getItem('dailyGoal');
    const savedCompleted = localStorage.getItem('goalCompleted') === 'true';
    if (savedGoal) {
      setCurrentGoal(savedGoal);
      setCompleted(savedCompleted);
    }
  }, []);

  const handleSetGoal = () => {
    setCurrentGoal(goal);
    localStorage.setItem('dailyGoal', goal);
    setGoal('');
  };

  const handleCompleteGoal = () => {
    setCompleted(true);
    localStorage.setItem('goalCompleted', 'true');
  };

  const handleResetGoal = () => {
    setCurrentGoal('');
    setCompleted(false);
    localStorage.removeItem('dailyGoal');
    localStorage.removeItem('goalCompleted');
  };

  return (
    <div className="daily-goals-container">
      {currentGoal ? (
        <div>
          <h2>Today's Goal</h2>
          <p>{currentGoal}</p>
          {completed ? (
            <p>Goal completed! 🎉</p>
          ) : (
            <button onClick={handleCompleteGoal}>Mark as Completed</button>
          )}
          <button onClick={handleResetGoal}>Reset Goal</button>
        </div>
      ) : (
        <div>
          <h2>Set Your Daily Goal</h2>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter your goal for today"
          />
          <button onClick={handleSetGoal}>Set Goal</button>
        </div>
      )}
    </div>
  );
};

export default DailyGoals;
