import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatSidebar from '../components/ChatSidebar';
import IndividualChat from './IndividualChat';

const Chats = () => {
  const chats = ['Megami', 'Segami'];

  return (
    <div className='flex'>
      <ChatSidebar list={chats} />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<div>Select a chat</div>} />
          <Route path=":chatId" element={<IndividualChat />} />
        </Routes>
      </div>
    </div>
  );
}

export default Chats;
