import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
const Navbar = () => {
  const user = false;
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Grid container justifyContent={'flex-end'}>
              {user ? <Button variant={"contained"} color={"secondary"}>Выйти</Button> : <Button variant={"contained"} color={"secondary"}>Логин</Button>}
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};

export default Navbar;
