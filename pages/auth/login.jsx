// Libraries
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//MUI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Card, CardMedia, Grid, Box, Typography, TextField } from '@mui/material';
import Link from '../../src/components/commons/Link';

function LoginPage() {
  const { control, handleSubmit } = useForm();

  return (
    <Grid component="main" container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={8}
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
      >
        {/* Logo */}
        <Box
          sx={{
            width: 150,
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 20
          }}
        >
          <Link href="/">
            <CardMedia
              image="/images/logo.png"
              alt="Volta Pets Logo"
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                bgcolor: 'rgba(255, 255 ,255 , 0.65)',
                borderRadius: 2,
                px: 0.5
              }}
            />
          </Link>
        </Box>
      </Grid>

      {/* Form */}
      <Grid item component="aside" xs={4}>
        <Card
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2
          }}
        >
          {/* Imagen */}
          <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
            <AccountCircleIcon />
          </Avatar>

          {/* Título */}
          <Typography variant="h5" component="h1">
            Inicio de sesión
          </Typography>

          {/* Formulario */}
          <Box
            component="form"
            onSubmit={handleSubmit((data) => console.log(data))}
            noValidate
            sx={{ mt: 2, border: 1 }}
          >
            <Controller
              control={control}
              name="username"
              render={({ field }) => <TextField {...field} />}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
