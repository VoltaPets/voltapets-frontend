// Libraries
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//MUI
import { Avatar, Button, Card, Grid, Typography, TextField } from '@mui/material';
import Link from '../../src/components/commons/Link';

// Related Imports
import TextInput from '../../src/components/commons/formInput';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email('Debes ingresar un correo válido (ejemplo@mail.com)')
    .required('Debes ingresar un correo'),
  password: yup.string().required('Debes ingresar una contraseña')
});

const formSettings = {
  resolver: yupResolver(loginSchema),
  defaultValues: {
    username: '',
    password: ''
  }
};

function LoginPage() {
  // States
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: '',
      pwd: ''
    }
  });

  // Function
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Grid component="main" container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={7}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          position: 'relative',
          backgroundImage: 'url(/images/dog-walk-bg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <Grid item component="aside" xs={5} p={4}>
        {/* Form container */}
        <Card
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Imagen */}
          <Link href="/">
            <Avatar
              sx={{ m: 1, bgcolor: 'primary', width: 150, height: 150, p: 1, mb: 4 }}
              src="/images/logo.png"
            />
          </Link>

          {/* Título */}
          <Typography variant="h5" component="h1">
            Inicio de sesión
          </Typography>

          {/* Formulario */}
          <Grid
            container
            component="form"
            onSubmit={handleSubmit((data) => console.log(data))}
            noValidate
            sx={{ mt: 2 }}
          >
            {/* Nombre de usuario */}
            <Grid item xs={12} height={85}>
              <TextInput
                control={control}
                name="username"
                labelText="Nombre de usuario"
                errorName={errors.username}
                errorText={errors.username?.message}
                type="text"
                placeholderText="ejemplo@mail.cl"
              />
            </Grid>

            {/* Contraseña */}
            <Grid item xs={12} mt={1} height={85}>
              <TextInput
                control={control}
                name="password"
                labelText="Contraseña"
                errorName={errors.pwd}
                errorText={errors.pwd?.message}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
            </Grid>

            {/* Acción */}
            <Grid item xs={12} mt={2}>
              <Button fullWidth type="submit" variant="contained">
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </Card>

        {/* Recuperacion de contraseña y registro */}
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs>
            <Link href="/auth/recuperacion">
              <Typography variant="body2">¿Olvidaste tu contraseña?</Typography>
            </Link>
          </Grid>
          <Grid item sx={{ textAlign: 'right' }}>
            <Typography variant="body2">Todavía no tienes una cuenta</Typography>
            <Link href="/auth/register/user">
              <Typography variant="body2">Regístrate aquí</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
