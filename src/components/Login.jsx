import React from "react";
import Typography from "@mui/material/Typography";
import logo from "../images/logo.png";
import Button from "@mui/material/Button";
import useStyles from "../styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.loginDiv}>
      <div className={classes.leftLogin}>
        <img className="logo-img" src={logo} alt="logo" />
        <Typography variant="h3" mb={2} color="#37366F">
          Login
        </Typography>
        <Typography variant="h5">
          Welcome to D-Community!
        </Typography>
        <Typography variant="subtitle1" pr={3} mb={5} color="#00000099">
          Please login to your account and start searching for jobs...
        </Typography>
        <label className="label" for="fname">
          Mobile Number<span style={{ color: "red" }}>*</span>
        </label>
        <OutlinedInput
          sx={{ borderRadius: "40px", marginTop: "4%" }}
          size="small"
          placeholder="Enter your mobile number"
          fullWidth
          required
        />
        <label className="label" for="fname">
          Enter OTP
        </label>
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <LockOutlinedIcon />
            </InputAdornment>
          }
          sx={{ borderRadius: "40px", marginTop: "4%" }}
          size="small"
          fullWidth
        />
        <Button
          sx={{
            borderRadius: "40px",
            backgroundColor: "#26AEE2",
            marginTop: "15%",
          }}
          fullWidth
          variant="contained"
        >
          Send OTP
        </Button>
      </div>
    </div>
  );
}

export default Login;
