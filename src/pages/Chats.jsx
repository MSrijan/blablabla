import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatSidebar from '../components/ChatSidebar';
import IndividualChat from './IndividualChat';
import { ChatRoomsContext } from '../contexts/ChatRoomsContext';

const Chats = () => {
  const { chatRooms } = useContext(ChatRoomsContext);
  console.log(chatRooms);
  

  return (
    <div className='flex'>
      <ChatSidebar list={chatRooms} />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={
            <div className='flex w-100 justify-center items-center h-[96vh] text-6xl'>Start the beginning of a legendary conversation.</div>
            } />
          <Route path=":chatId" element={<IndividualChat />} />
        </Routes>
      </div>
    </div>
  );
}

export default Chats;
