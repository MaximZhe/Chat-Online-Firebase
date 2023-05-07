import { Container, Grid } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <Container>
            <Grid container style={{ height: window.innerHeight - 50 }} alignItems={"center"} justifyContent={"center"}>
                <Grid>
                    <div className="loader">Loading
                        <span></span>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;