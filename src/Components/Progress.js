import React, { useEffect, useState } from 'react';
import './Progress.css';

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storedProgress = localStorage.getItem('progress');
    if (storedProgress) {
      setProgress(parseInt(storedProgress));
    }
  }, []);

  return (
    <div className="progress-container">
      <h2>Your Learning Progress</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}% Completed</p>
    </div>
  );
};

export default Progress;
