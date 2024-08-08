import { useState, useEffect, useCallback } from 'react';

// Expanded array of predefined replies
const replies = [
  'Hi there!',
  'Hello!',
  'How are you?',
  'Hey!',
  'Good to see you!',
  'What’s up?',
  'How can I help you?',
  'Nice to meet you!',
  'I’m here to assist you.',
  'Feel free to ask me anything.',
  'Hope you’re having a great day!',
  'How’s it going?',
  'I’m happy to help!',
  'What can I do for you today?',
  'Is there something you need help with?',
  'Sure, I’m here for you.',
  'Anything specific you need?',
  'Let me know if you need anything!',
  'Shot hai!',//easter egg haha
];

const getReplyForMessage = (messageText) => {
  const lowerCaseText = messageText.toLowerCase();

  if (lowerCaseText.includes('hello')) {
    return 'Hello! How can I assist you today?';
  }
  if (lowerCaseText.includes('how are you')) {
    return 'I’m doing great, thank you! How about you?';
  }
  if (lowerCaseText.includes('help') || lowerCaseText.includes('assistance')) {
    return 'I’m here to help. What do you need assistance with?';
  }
  if (lowerCaseText.includes('shot')) {
    return 'Shot hai!';
  }

  return replies[Math.floor(Math.random() * replies.length)];
};

const useChatMessages = (chatId, type) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(`messages_${chatId}`)) || [];
    setMessages(storedMessages);
  }, [chatId]);

  useEffect(() => {
    if (messages.length) {
      localStorage.setItem(`messages_${chatId}`, JSON.stringify(messages));
    }
  }, [messages, chatId]);

  const addMessage = useCallback((message) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, message];
      localStorage.setItem(`messages_${chatId}`, JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  }, [chatId]);

  useEffect(() => {
    if (messages.length && type === 'individual' && !messages[messages.length - 1].isReply) {
      const lastMessageText = messages[messages.length - 1].text;
      const replyMessage = { text: getReplyForMessage(lastMessageText), timestamp: new Date().toISOString(), isReply: true };

      setTyping(true);
      const timeoutId = setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, replyMessage];
          localStorage.setItem(`messages_${chatId}`, JSON.stringify(updatedMessages));
          return updatedMessages;
        });
        setTyping(false); 
      }, Math.random() * 1500); 

      return () => clearTimeout(timeoutId);
    }
  }, [messages, type, chatId]);

  return { messages, addMessage, typing };
};

export default useChatMessages;
