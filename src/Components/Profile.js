// src/components/Profile.js
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleUpdateUsername = () => {
    const newUsername = prompt('Enter your new username:');
    if (newUsername) {
      localStorage.setItem('username', newUsername);
      setUsername(newUsername);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {username}</p>
      <button onClick={handleUpdateUsername}>Update Username</button>
    </div>
  );
};

export default Profile;
