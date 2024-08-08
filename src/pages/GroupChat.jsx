import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useChatMessages from '../Hooks/useChatMessages';
import Button from '../components/Button';

const sender = localStorage.getItem('username');

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); 
};

const GroupChat = () => {
  const { groupId } = useParams();
  const { messages, addMessage } = useChatMessages(groupId, 'group');
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      addMessage({
        text: newMessage,
        timestamp: new Date().toISOString(),
      });
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[96vh]"> 
      <div className="flex-1 overflow-auto p-4">
        <h1 className="text-2xl font-bold text-black mb-4">{groupId}</h1>
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message flex items-center justify-between mb-4 p-2 rounded bg-blue-100">
              <div className="message-content text-black">
                <div className="font-bold">{sender}</div>
                <div>{message.text}</div>
              </div>
              <div className="timestamp text-sm text-gray-600">
                {formatTimestamp(message.timestamp)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="border-t bg-white flex items-center p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 border rounded p-2"
          onKeyDown={handleKeyPress}
        />
        <Button onClick={handleSendMessage}>Send</Button>
        </div>
    </div>
  );
}

export default GroupChat;
