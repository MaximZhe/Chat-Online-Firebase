import React, { useContext,createContext, useState, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';

import { authContext } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader/Loader';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constant';
import Home from './components/Home/Home';
import AppRouter from './components/AppRouter/AppRouter';

// export const singUserContext = createContext<boolean>()

function App() {
  const [user, setUser] = useState()
  const {auth} = useContext(authContext)
  const log = useAuthState(auth)
  console.log(log[1]);
  
  // if (loading){
  //   return <Loader/>
  // }
  return (
    <>
      <Navbar />
      <AppRouter/>
      
    </>
  );
}

export default App;
