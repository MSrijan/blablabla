import React from 'react';
import { Link } from 'react-router-dom';

const GroupChatSidebar = ({ list }) => {
  return (
    <div className='bg-slate-300 min-h-dvh p-6 border-r-8 border-y-0 border-l-0 rounded-r-xl border-slate-300 w-48'>
      {list.map((chatGroup, index) => (
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
