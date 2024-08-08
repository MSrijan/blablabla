import React from 'react';
import GroupChatSidebar from '../components/GroupChatSidebar';
import { Routes, Route } from 'react-router-dom';
import GroupChat from './GroupChat';

const ChatRooms = () => {
  const groups = ['G1', 'G0'];

  return (
    <div className='flex'>
      <GroupChatSidebar list={groups} />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<div>Select a chat group</div>} />
          <Route path=":groupId" element={<GroupChat />} />
        </Routes>
      </div>
    </div>
  );
}

export default ChatRooms;
