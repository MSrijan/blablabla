import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChatRoomsContext } from '../contexts/ChatRoomsContext';

const GroupChatSidebar = ({ list }) => {
  const { groupChats } = useContext(ChatRoomsContext);

  return (
    <div className='bg-slate-300 min-h-dvh p-6 border-r-8 border-y-0 border-l-0 rounded-r-xl border-slate-300 w-48'>
      <p className='text-3xl font-bold mb-6'>Groups</p>
      {groupChats.map((chatGroup, index) => (
        <div key={index} className='text-xl mb-2'>
          <Link to={`/chat-rooms/${chatGroup.toLowerCase()}`}>
            {chatGroup}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GroupChatSidebar;
