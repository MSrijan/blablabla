import React, { createContext, useEffect, useState } from 'react';

export const ChatRoomsContext = createContext();

export const ChatRoomsProvider = ({ children }) => {
  const [chatRooms, setChatRooms] = useState(['Megami', 'Segami']);
  const [groupChats, setGroupChats] = useState(['G1', 'G2']);

  useEffect(() => {
    const savedChatRooms = JSON.parse(localStorage.getItem('chatRooms')) || chatRooms;
    const savedGroupChats = JSON.parse(localStorage.getItem('groupChats')) || groupChats;
    setChatRooms(savedChatRooms);
    setGroupChats(savedGroupChats);
  }, []);

  useEffect(() => {
    localStorage.setItem('chatRooms', JSON.stringify(chatRooms));
    localStorage.setItem('groupChats', JSON.stringify(groupChats));
  }, [chatRooms, groupChats]);

  return (
    <ChatRoomsContext.Provider value={{ chatRooms, setChatRooms, groupChats, setGroupChats }}>
      {children}
    </ChatRoomsContext.Provider>
  );
};
