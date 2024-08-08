import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChatRoomsContext } from '../contexts/ChatRoomsContext';

const ChatSidebar = () => {
  const { chatRooms } = useContext(ChatRoomsContext);

  return (
    <div className='bg-slate-300 min-h-dvh p-6 border-r-8 border-y-0 border-l-0 rounded-r-xl border-slate-300 w-48'>
      <p className='text-3xl font-bold mb-6'>Chats</p>
      {chatRooms.map((chat, index) => (
        <div key={index} className='text-xl mb-2'>
          <Link to={`/chats/${chat.toLowerCase()}`}>
            {chat}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ChatSidebar;
