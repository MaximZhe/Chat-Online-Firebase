import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 50 }} alignItems={"center"} justifyContent={"center"}>
        <Grid>
          <Box>
            <Button variant={"outlined"}>Войти через Gogle</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
