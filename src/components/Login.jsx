import React from "react";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../images/logo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Login(){

    return (
        <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginLeft: 20,
            marginRight: 15 ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
        
        <img className="logo-img" src={logo} alt="logo"/>
        
        <Typography component="h1" variant="h3">
            Login
        </Typography>
        <Typography mt={2} mb={1} variant="h5">
            Welcome to D-Community!
        </Typography>
        <Typography mt={2} mb={1} variant="subtitile1">
            Please login to your account and start searching for jobs...
        </Typography>
        {/* <Typography mt={2} mb={1} variant="h6">
            Mobile Number
        </Typography> */}
        <TextField sx={{marginTop: 5}} placeholder="Enter your mobile number" label="Mobile Number" required/>
        {/* <Typography mt={2} mb={1} variant="h6">
            Enter OTP
        </Typography> */}
        <TextField sx={{marginTop: 5}} label="OTP" variant="outlined" />
        <Button sx={{marginTop: 5}} variant="contained">Send OTP</Button>
        </Box>
        </Container>
    )
}

export default Login;