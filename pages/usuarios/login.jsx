// Libraries
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';

//MUI
import PetsIcon from '@mui/icons-material/Pets';
import { Avatar, Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';

// Related Imports
import Link from '../../src/components/commons/Link';
import TextInput from '../../src/components/commons/formInput';
import { loginSchema } from '../../src/utils/validations';

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
  } = useForm(formSettings);

  // Function
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Head>
        <title>Inicio de sesión - Volta Pets</title>
      </Head>
      <Grid component="main" container sx={{ height: '100vh' }}>
        <Grid
          item
          sm={6}
          md={7}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            position: 'relative',
            backgroundImage: 'url(/images/dog-walk-bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'absolute', top: 0, left: 0 }}>
            <CardMedia
              component="img"
              image="/logo4.jpg"
              alt="Volta Pets"
              sx={{ width: 150, height: 150 }}
            />
          </Box>
        </Grid>

        <Grid
          item
          component="aside"
          xs={12}
          sm={6}
          md={5}
          p={4}
          sx={{ bgcolor: 'background.paper' }}
        >
          {/* Form container */}
          <Card
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'background.paper'
            }}
          >
            {/* Imagen */}
            <Link underline="hover" href="/">
              <Avatar
                sx={{ m: 1, bgcolor: 'secondary.light', width: 100, height: 100, p: 1, mb: 4 }}
              >
                <PetsIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />
              </Avatar>
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
                  errorName={errors.password}
                  errorText={errors.password?.message}
                  type={showPassword ? 'text' : 'password'}
                  handleShowPassword={handleShowPassword}
                />
              </Grid>

              {/* Acción */}
              <Grid item xs={12} mt={2}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ textTransform: 'inherit', color: '#fff' }}
                >
                  Iniciar sesión
                </Button>
              </Grid>
            </Grid>
          </Card>

          {/* Recuperacion de contraseña y registro */}
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs>
              <Link underline="hover" href="/password/recovery">
                <Typography variant="body2" color="secondary">
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Link>
            </Grid>
            <Grid item sx={{ textAlign: 'right' }}>
              <Typography variant="body2">Todavía no tienes una cuenta</Typography>
              <Link underline="hover" href="/registro/tutor">
                <Typography variant="body2" color="secondary">
                  Regístrate aquí
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
