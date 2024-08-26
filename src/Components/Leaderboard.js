import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const users = [
    { name: 'Alice', score: 150 },
    { name: 'Bob', score: 120 },
    { name: 'Charlie', score: 100 },
    { name: 'Victor', score: 100 },
    { name: 'emmanuel', score: 40 },
    { name: 'Samuel', score: 39 },


  ];

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
