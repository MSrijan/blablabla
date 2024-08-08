import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaComments, FaUsers, FaCogs } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <p className='font-bold text-lg'><span className='text-red-600'>*</span>No one replies to the group chat, but you can expect some replies from the bots</p>
      <main className="flex-1 w-full max-w-5xl p-6">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
            <FaUser className="text-black text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Customize Profile</h2>
            <p className="text-gray-800 mb-4">Add a profile</p>
            <Link to="/profile" className="bg-black text-white px-4 py-2 rounded">Go to Profile</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
            <FaComments className="text-black text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Send Messages</h2>
            <p className="text-gray-800 mb-4">Chat with a friend </p>
            <Link to="/chats" className="bg-black text-white px-4 py-2 rounded">Start Chat</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
            <FaUsers className="text-black text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Send Group Messages</h2>
            <p className="text-gray-800 mb-4">Chat with friends</p>
            <Link to="/chat-rooms" className="bg-black text-white px-4 py-2 rounded">Join Group</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
            <FaCogs className="text-black text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Change Settings</h2>
            <p className="text-gray-800 mb-4">Adjust your app preferences and settings.</p>
            <Link to="/settings" className="bg-black text-white px-4 py-2 rounded">Go to Settings</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
