import React from "react";
import Login from "./Login";
import LoginContent from "./LoginContent";
import Grid from '@mui/material/Grid';

function App() {

    return(
        <Grid container spacing={0} p={0} m={0}>
          <Grid item xs={6} sx={{backgroundColor: "#FFFFFF"}}>
            <Login />
          </Grid>
          <Grid item xs={6}>
            <LoginContent/>
          </Grid>
        </Grid>
    )
}

export default App;