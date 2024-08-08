import React from 'react';
import { useParams } from 'react-router-dom';

const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const GroupChat = () => {
  const { groupId } = useParams();  // Use `groupId` to match the route parameter
  const name = capitalizeWords(groupId);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-black">{name}</h1>
      {/* Add your chat UI components here */}
    </div>
  );
}

export default GroupChat;
