import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../..';
import {useAuthState} from 'react-firebase-hooks/auth'
import { provaider } from '../../firebase-config.js';
import {signInWithRedirect } from 'firebase/auth';
import { NavLink, Outlet } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../utils/constant';

const Login = () => {
  const {auth} =useContext(authContext)

    async function login (){
        await signInWithRedirect(auth,provaider);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      }
 
  
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 50 }} alignItems={"center"} justifyContent={"center"}>
        <Grid>
          <Box>
            
              <Button onClick={login} variant={"outlined"}>Войти через Gogle</Button>
            
            
          </Box>
        </Grid>
      </Grid>
      <Outlet />
    </Container>
  );
};

export default Login;
