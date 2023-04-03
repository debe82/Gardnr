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
import { Alert } from "@mui/material";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import { bgcolor, borderColor } from "@mui/system";

const theme = createTheme();

export default function SignIn() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    axios
      .post("http://localhost:8080/api/users", {
        userEmail: data.get("email"),
        userPassword: data.get("password"),
      })
      .then(
        (response) => {
          console.log(response.data);
          setUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        },
        (error) => {
          console.log(
            " this is error",
            error.response.data.message,
            "response data",
            error.response.data[0]
          );
          setErrMsg(error.response.data.message);
        }
      );
  };

  if (user.userId != 0) {
    navigate(`/${user.userId}`);
  }

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
            Sign in
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

            {errMsg ? (
              <Alert severity="error">
                <p>{errMsg}</p>
              </Alert>
            ) : null}

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
              Sign In
            </Button>
            <Grid container>
              <Grid
                item
                xs>
                <Link
                  sx={{ color: "white" }}
                  href="#"
                  fontSize={"16px"}
                  fontWeight={"bolder"}
                  variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  sx={{ color: "white" }}
                  href="/signup"
                  fontSize={"16px"}
                  fontWeight={"bolder"}
                  variant="body2">
                  {"Sign up here!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
