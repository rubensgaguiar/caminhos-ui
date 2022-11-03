import React, { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";

import { useRouter } from "next/router";

import MessageSnackBar from "./messageSnackBar";

import { useUserStore } from "../store/store";
import { redirectToCheckout } from "../utils/checkout";

const Login = () => {
  const router = useRouter();
  const setUser = useUserStore((state: any) => state.setUser);

  const [open, setOpen] = useState(false);
  const [error, setError] = useState("Ocorreu um erro!");

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const redirectLandingPage = () => {
    window.location.href = "https://www.ailo.ai";
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const getUser = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/core/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    return response.json();
  };

  const handleLogin = () => {
    getUser()
      .then((res) => {
        if (res.payment_status !== "paid") {
          // redirect to checkout
          redirectToCheckout(res.id, res.email);
          return;
        }

        setUser({
          id: res.id,
          email: res.email,
          status: res.payment_status,
        });

        router.push("/caminhos");
      })
      .catch((err) => setOpen(true));
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <MessageSnackBar open={open} error={error} handleClose={handleClose} />
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleEmail}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Senha"
          type="password"
          variant="outlined"
          onChange={handlePassword}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleLogin}>
          Entrar
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={redirectLandingPage}>Assine Agora</Button>
      </Grid>
    </Grid>
  );
};

export default Login;
