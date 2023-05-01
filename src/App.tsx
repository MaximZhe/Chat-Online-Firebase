import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constant';
function App() {
  const user = true;
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={user ? <Login /> : <Chat />} />
    </Routes>
  );
}

export default App;
