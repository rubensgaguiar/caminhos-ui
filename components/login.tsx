import { Button, Grid, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()

  const redirectLandingPage = () => {
    window.location.href='https://www.ailo.ai'
  }

  const handleLogin = () => {
    router.push('/caminhos')
  }

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Grid>
      <Grid item>
        <TextField id="outlined-basic" label="Senha" variant="outlined" />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleLogin}>Entrar</Button>
      </Grid>
      <Grid item>
        <Button onClick={redirectLandingPage}>Assine Agora</Button>
      </Grid>
    </Grid>
  )
}

export default Login
