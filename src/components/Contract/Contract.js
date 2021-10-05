import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './Contract.css';

const Contract = () => {
  // contract 
  
  return (
    <div className='contract'>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
            <span>Search course</span>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <span>Email</span>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="abc@gmail.com"
            variant="filled"
          />
          <span>Password</span>
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <span>Comment</span>
          <TextField
            id="filled-input"
            label="Read Only"
            defaultValue=""
            InputProps={{
              readOnly: false,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />

          <Button variant="contained">Submit</Button>
        </div>
      </Box>
    </div>
  );
};

export default Contract;
