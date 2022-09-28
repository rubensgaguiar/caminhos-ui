import React, { FunctionComponent, useState } from "react";

import { useRouter } from "next/router";

import { Button, Grid, TextField } from "@mui/material";

import { redirectToCheckout } from "../utils/checkout";

const SignUp: FunctionComponent = () => {
  const router = useRouter();

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const signup = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/core/signup", {
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

  const handleSignup = () => {
    // fazer o fetch do enpoint
    signup()
      .then((res) => {
        // se a conta tiver sido criada com sucesso,
        // pegar informacoes de id e email e redirecionar para:
        redirectToCheckout(res.id, res.email);
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    router.push("/");
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
          type="password"
          variant="outlined"
          onChange={handlePassword}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Confirmar Senha"
          type="password"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSignup}>
          Finalizar Checkout
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={handleLogin}>Já possuo conta</Button>
      </Grid>
    </Grid>
  );
};

export default SignUp;
