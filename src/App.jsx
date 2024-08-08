import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Chats from './pages/Chats';
import ChatRooms from './pages/ChatRooms';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { ChatRoomsProvider } from './contexts/ChatRoomsContext';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <ChatRoomsProvider>
      <UserProvider>
       <Router>
          <div className="flex min-h-dvh">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chats/*" element={<Chats />} />
                <Route path="/chat-rooms/*" element={<ChatRooms />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </Router>
      </UserProvider>
    </ChatRoomsProvider>
  );
}

export default App;
