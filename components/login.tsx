import React, { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";

import { useRouter } from "next/router";

import { useUserStore } from "../store/store";

const Login = () => {
  const router = useRouter();
  const setUser = useUserStore((state: any) => state.setUser);

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const redirectLandingPage = () => {
    window.location.href = "https://www.ailo.ai";
  };

  const handleEmail = (event) => {
    setEmail(event.value.target);
  };

  const handlePassword = (event) => {
    setPassword(event.value.target);
  };

  const getUser = async () => {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    return response.json();

    // return {
    //   userId: "123",
    //   email: "123",
    //   status: "paid"
    // };
  };

  const handleLogin = () => {
    getUser()
      .then((res) => {
        setUser({
          userId: res.userId,
          email: res.email,
          status: res.status,
        });

        router.push("/caminhos");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
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
