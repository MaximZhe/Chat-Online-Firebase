import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/constant';
const Navbar = () => {
  const user = false;
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
