import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';
import { authContext } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader/Loader';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constant';
import Home from './components/Home/Home';
function App() {
  const {auth} = useContext(authContext)
  const [user,loading] = useAuthState(auth);

  if (loading){
    return <Loader/>
  }
  return (
    <>
      <Navbar />
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          {user ? 
          <Route path={CHAT_ROUTE} element={<Chat/>}/>
          :
          <Route path={LOGIN_ROUTE} element={<Login/>} />
          }
          <Route path={'*'} element={<Home/>}/>
        
        
      </Routes>
    </>
  );
}

export default App;
