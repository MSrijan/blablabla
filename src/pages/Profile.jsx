import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import Button from '../components/Button';

const Profile = () => {
  const { username, setUsername } = useUser();
  const [newUsername, setNewUsername] = useState(username);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
    setMessage('Username Changed');
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-lg font-medium mb-4">Username:</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Enter your username"
          className="bg-gray-100 border border-gray-300 text-black p-2 rounded w-full mb-4"
        />
        <Button onClick={handleSave}>Save</Button>
        {message && <div className="mt-4 text-center text-green-500">{message}</div>}
      </div>
    </div>
  );
};

export default Profile;
