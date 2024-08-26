// src/components/Auth.js
import React, { useState } from 'react';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUp = () => {
    localStorage.setItem('username', username);
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem('username');
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {localStorage.getItem('username')}</p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
