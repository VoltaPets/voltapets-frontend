// Libraries
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';

//MUI
import PetsIcon from '@mui/icons-material/Pets';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  CircularProgress
} from '@mui/material';

// Related Imports
import Link from '../../src/components/commons/Link';
import TextInput from '../../src/components/commons/FormInput';
import { loginSchema } from '../../src/utils/validations';
import { request } from '../../src/api';
import { LOGIN, isLoginResponse } from '../../src/api/endpoints/Login';

const formSettings = {
  resolver: yupResolver(loginSchema),
  defaultValues: {
    email: '',
    password: ''
  }
};

function LoginPage() {
  // Estados
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hooks
  const { query } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(formSettings);

  // Function
  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (form) => {
    setLoading(true);
    try {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
      }

      const { data } = await request({
        url: LOGIN,
        method: 'POST',
        data: form
      });

      const siguientePagina = query?.next || '/';
      if (data && isLoginResponse(data)) {
        localStorage.setItem('token', data.token);

        if (typeof siguientePagina === 'string') {
          window.location.href = siguientePagina;
        }

        switch (data.codigoRol) {
          case 1:
            window.location.href = '/admin';
            break;
          case 2:
            window.location.href = '/paseador/home';
            break;
          case 3:
            window.location.href = '/tutor/home';
            break;
          default:
            window.location.href = '/';
        }
      }

      enqueueSnackbar('Has iniciado sesión correctamente', { variant: 'info' });
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        if (error.response) {
          const { data } = error.response;
          data.mensaje && enqueueSnackbar(data.mensaje, { variant: 'error' });
        } else {
          enqueueSnackbar('Error en la conexión', { variant: 'error' });
        }
      }
      console.error(error);
    }
  };
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
            <Link underline="hover" href="/">
              <CardMedia
                component="img"
                image="/logo.jpg"
                alt="Volta Pets"
                sx={{ width: 150, height: 150 }}
              />
            </Link>
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.light', width: 100, height: 100, p: 1, mb: 4 }}>
              <PetsIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />
            </Avatar>

            {/* Título */}
            <Typography variant="h5" component="h1">
              Inicio de sesión
            </Typography>
            {query.next && (
              <Typography variant="body2" mt={2} color="info.main">
                Debes iniciar sesión para acceder a esta página
              </Typography>
            )}

            {/* Formulario */}
            <Grid
              container
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 2 }}
            >
              {/* Nombre de usuario */}
              <Grid item xs={12} height={85}>
                <TextInput
                  disabled={loading}
                  control={control}
                  name="email"
                  labelText="Nombre de usuario"
                  errorName={errors.email}
                  errorText={errors.email?.message}
                  type="text"
                  placeholderText="ejemplo@mail.cl"
                />
              </Grid>

              {/* Contraseña */}
              <Grid item xs={12} mt={1} height={85}>
                <TextInput
                  disabled={loading}
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
                  disabled={loading}
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ color: '#fff', fontWeight: 'bold' }}
                >
                  {loading ? <CircularProgress /> : 'Iniciar sesión'}
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
