import React, { useState } from "react";
import "./Signup.css";
import { Box, TextField, Button, Link, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import UserIcon from "@material-ui/icons/PersonSharp";
import AdminIcon from "@material-ui/icons/SupervisedUserCircleSharp";

const Signup = () => {
  const navigation = useHistory();
  const [type, setType] = useState("Customer");

  return (
    <Box
      width={900}
      height={450}
      display="flex"
      justifyContent="space-around"
      flexDirection="col"
      className="main-box"
    >
      <Box
        width={400}
        height={350}
        className="box-right"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <h2 className="login-label">SignUp</h2>

        {type == "Admin" ? (
          <TextField id="standard-basic" label="Employee ID" />
        ) : null}
        <TextField id="standard-basic" label="Name" />
        <TextField id="standard-basic" label="Email" />
        {type == "Admin" ? <TextField id="standard-basic" label="NIC" /> : null}
        <TextField id="standard-basic" label="Mobile Number" />

        {type == "Customer" ? (
          <TextField id="standard-basic" label="Address" />
        ) : null}

        <TextField type="password" id="standard-basic" label="Password" />

        <Button
          className="login-btn"
          onClick={() => {}}
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
        >
          Signup
        </Button>

        <h5>
          <br></br>
          <Link
            className="signup-label"
            onClick={() => {
              navigation.goBack();
            }}
          >
            Login?
          </Link>
        </h5>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box
          className="box-left"
          display="flex"
          flexDirection="col"
          width={450}
          height={250}
        ></Box>

        <Box
          display="flex"
          justifyContent="space-around"
          paddingTop="20px"
          paddingLeft="150px"
          paddingRight="150px"
        >
          <IconButton
            color="primary"
            aria-label="delete"
            style={{ fontSize: "20px" }}
            onClick={() => {
              setType("Customer");
            }}
          >
            <UserIcon />
            Customer
          </IconButton>
          <IconButton
            color="primary"
            style={{ fontSize: "20px" }}
            aria-label="delete"
            onClick={() => {
              setType("Admin");
            }}
          >
            <AdminIcon />
            Admin
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
