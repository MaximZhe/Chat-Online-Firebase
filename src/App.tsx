import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';
function App() {
  const user = false;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={user ? <Chat /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
