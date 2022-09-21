import React, { FunctionComponent, useEffect, useState } from "react";

import { Button, Grid, TextField } from "@mui/material";
import type { NextPage } from "next";

const SignUp: FunctionComponent = () => {
  const redirectCheckout = () => {
    // fazer o fetch do enpoint

    // se a conta tiver sido criada com sucesso,
    // pegar informacoes de id e email e redirecionar para:
    const id = "123";
    const email = "asas%40asda.com";
    window.location.href = `https://buy.stripe.com/test_cN29D2gM05yL6vC3cc?prefilled_email=${email}&client_reference_id=${id}`;
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField id="outlined-basic" label="Senha" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Confirmar Senha"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={redirectCheckout}>
          Finalizar Checkout
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignUp;
