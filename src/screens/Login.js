import React from "react";
import "./Login.css";
import { Box, TextField, Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Login = () => {
  const navigation = useHistory();

  return (
    <Box
      width={700}
      height={350}
      display="flex"
      justifyContent="space-around"
      flexDirection="col"
      className="main-box"
    >
      <Box
        width={300}
        height={200}
        className="box-right"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <h2 className="login-label">LogIn</h2>
        <TextField id="standard-basic" label="Email" />

        <TextField type="password" id="standard-basic" label="Password" />
        <br></br>
        <Button
          className="login-btn"
          onClick={() => {}}
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <h5>
          <Link
            className="signup-label"
            onClick={() => {
              navigation.push("/Signup");
            }}
          >
            Sign Up?
          </Link>
        </h5>
      </Box>
      <Box
        className="box-left"
        display="flex"
        flexDirection="col"
        width={350}
        height={150}
      ></Box>
    </Box>
  );
};

export default Login;
