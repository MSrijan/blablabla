import React from 'react';
import { useParams } from 'react-router-dom';

const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const IndividualChat = () => {
  const { chatId } = useParams();
  const name = capitalizeWords(chatId);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-black">{name}</h1>
    </div>
  );
}

export default IndividualChat;
