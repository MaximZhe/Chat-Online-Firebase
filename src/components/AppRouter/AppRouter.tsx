import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { authContext } from '../..';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../utils/constant';
import Chat from '../Chat/Chat';
import Login from '../Login/Login';
import Loader from '../Loader/Loader';

const AppRouter = () => {
  const { auth } = useContext(authContext)
  const [user, loading] = useAuthState(auth);
  // const user = false;
  if (loading) {
    return <Loader />
  }
  return user ?
    (
      <Routes>
        <Route index path={CHAT_ROUTE} element={<Chat />} />
        <Route path={'*'} element={<Navigate to={CHAT_ROUTE} replace/>} />
      </Routes>

    )
    :
    (
      <Routes>
        <Route index path={LOGIN_ROUTE} element={<Login />} />
        <Route path={'*'} element={<Navigate to={LOGIN_ROUTE} replace/>} />
      </Routes>
    )
};

export default AppRouter;