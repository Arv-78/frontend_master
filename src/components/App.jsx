import React from "react";
import Login from "./Login";
import LoginContent from "./LoginContent";
import Grid from '@mui/material/Grid';
import useStyles from "../styles";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
    const classes = useStyles();
    return(
      <>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} md={6} className={classes.login}>
            <Login />
          </Grid>
          <Grid item md={6} className={classes.span}>
            <LoginContent/>
          </Grid>
        </Grid>
      </>
    )
}

export default App;