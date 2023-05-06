import React,{useContext} from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/constant';
import { authContext } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar = () => {
  const {auth} = useContext(authContext)
  const [user] = useAuthState(auth)
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Grid container justifyContent={'flex-end'}>
              {user ? <Button variant={"contained"} color={"secondary"}>Выйти</Button>
                :
                <NavLink to={LOGIN_ROUTE}>
                  <Button variant={"contained"} color={"secondary"}>Логин</Button>
                </NavLink>
              }
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};

export default Navbar;
