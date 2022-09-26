import React, { FunctionComponent, useState } from "react";

import { Button, Grid, TextField } from "@mui/material";

import { useRouter } from "next/router";

const SignUp: FunctionComponent = () => {
  const router = useRouter();

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const redirectToCheckout = (id: string, email: string) => {
    window.location.href = `https://buy.stripe.com/test_cN29D2gM05yL6vC3cc?prefilled_email=${email}&client_reference_id=${id}`;
  };

  const signup = async () => {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // return response.json();

    return {
      id: "123",
      email: "asas%40asda.com",
    };
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
