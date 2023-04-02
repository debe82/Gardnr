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
import { useState } from "react";

const theme = createTheme();
//const[errMsg,setErrMsg ] = useState("");

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   // if(data.get("password") != data.get("password2")){setErrMsg("The passwords arenot the same")}
  console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    axios.post("http://localhost:8080/api/users", {
      userEmail: data.get("email"),
      userPassword: data.get("password")
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
            }}>
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
              type="password2"
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
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{ borderColor: "white" }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "white",
                color: "gray",
              }}>
              Sign Up
            </Button>
            <Grid container>
              <Grid
                item
                xs>
                <Link
                  sx={{ color: "white" }}
                  href="#"
                  variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  sx={{ color: "white" }}
                  href="#"
                  variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}