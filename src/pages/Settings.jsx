import { useState } from "react";
import Button from '../components/Button'; 

const Settings = () => {
  const [message, setMessage] = useState(null);

  const handleSave = () => {
    setMessage('Haha')
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-lg font-medium mb-4">Choose Theme:</label>
        <select className="bg-gray-100 border border-gray-300 text-black p-2 rounded w-full mb-4">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <Button onClick={handleSave}>Save</Button>
        {message && (
          <div className="mt-6 text-center text-gray-400 text-lg">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
