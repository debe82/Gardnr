import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useContext, useState } from "react";
import "../Homepage.css";
import { Alert } from "@mui/material";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const { user, setUser } =
  useContext(Context);
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handeling submit");
    const data = new FormData(event.currentTarget);
    if (data.get("password") != data.get("password2")) {
      setErrMsg("Passwords do NOT match"), console.log("error", errMsg);
    } else {
      axios.post("http://localhost:8080/api/users", {
        userEmail: data.get("email"),
        userPassword: data.get("password"),
        userName: data.get("name"),
      }).then((response) => {
        setUser(response.data);
      }, (error) => {
        setErrMsg(error.response.data.message);
      });  
      ;
    }
  };

  if(user.userId != 0){ navigate(`/${user.userId}`)}

  return (
    <div className="landing-page-container">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
              }}
            >
              <TextField
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Password2"
                type="password"
                id="password2"
                autoComplete="second-password"
              />

              <TextField
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              {errMsg ? <Alert severity="error"><p>{errMsg}</p></Alert> : null}
  
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "white",
                  color: "gray",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
