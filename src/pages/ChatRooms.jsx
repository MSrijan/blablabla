import React, { useContext } from 'react';
import GroupChatSidebar from '../components/GroupChatSidebar';
import { Routes, Route } from 'react-router-dom';
import GroupChat from './GroupChat';
import { ChatRoomsContext } from '../contexts/ChatRoomsContext';

const ChatRooms = () => {
  const { groupChats } = useContext(ChatRoomsContext);

  return (
    <div className='flex'>
      <GroupChatSidebar list={groupChats} />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={
            <div className='flex w-100 justify-center items-center h-[96vh] text-6xl'>Start the beginning of a legendary conversation.</div>
          } />
          <Route path=":groupId" element={<GroupChat />} />
        </Routes>
      </div>
    </div>
  );
}

export default ChatRooms;
