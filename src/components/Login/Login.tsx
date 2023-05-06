import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { authContext } from '../..';
import firebase from 'firebase/app';
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';
const Login = () => {
  const {auth} = useContext(authContext)
  
  async function login (){
    const provaider = new GoogleAuthProvider();
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
    </Container>
  );
};

export default Login;
