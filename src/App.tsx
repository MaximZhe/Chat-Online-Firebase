import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';
import { authContext } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {
  const {auth} = useContext(authContext)
  const [user] = useAuthState(auth)
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
