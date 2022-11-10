import React from "react";
import Box from "@mui/material/Box";
import loginContentImg from "../images/loginContent.png";

function LoginContent() {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      sx={{
        backgroundColor: "#4F37E9",
      }}
    >
      <img
        className="login-content-Img"
        src={loginContentImg}
        alt="loginContentImg"
      />
    </Box>
  );
}

//this is devO1

export default LoginContent;
