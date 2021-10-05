import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import "animate.css"

const Header = () => {

  // navbar 
  
  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span className="animate__shakeY">Digital IT Center</span>
            </Typography>

            <Button color="inherit">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </Button>

            <Button color="inherit">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </Button>

            <Button color="inherit">
              {" "}
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink className="nav-link" to="/contract">
                Contract Us
              </NavLink>
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
