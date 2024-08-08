import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { PiChatsLight, PiChatThin } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const isChatPage = location.pathname.startsWith('/chats') || location.pathname.startsWith('/chat-rooms');

  return (
    <div className='min-h-full bg-black p-3 text-white'>
      <p className='font-bold text-xl my-3 mb-8'>Bla Bla</p>
      <div className='flex gap-3 text-xl flex-col justify-between'>
        <Link to="/" className="flex items-center gap-5 nav-link">
          <GoHome className='size-8' />
          <p className={isChatPage ? 'hidden' : ''}>Home</p>
        </Link>
        <Link to="/chats" className="flex items-center gap-5 nav-link">
          <PiChatThin className='size-8' />
          <p className={isChatPage ? 'hidden' : ''}>Chats</p>
        </Link>
        <Link to="/chat-rooms" className="flex items-center gap-5 nav-link">
          <PiChatsLight className='size-8' />
          <p className={isChatPage ? 'hidden' : ''}>Chat Rooms</p>
        </Link>
        <Link to="/profile" className="flex items-center gap-5 nav-link">
          <VscAccount className='size-8' />
          <p className={isChatPage ? 'hidden' : ''}>Profile</p>
        </Link>
        <Link to="/settings" className="flex items-center gap-5 nav-link">
          <FiSettings className='size-8' />
          <p className={isChatPage ? 'hidden' : ''}>Settings</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
