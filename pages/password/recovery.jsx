// Libreries
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// MUI
import { Box, Button, CardMedia, Typography } from '@mui/material';

// Relative imports
import { recoverySchema } from '../../src/utils/validations';
import TextInput from '../../src/components/commons/FormInput';
import Link from '../../src/components/commons/Link';

function PasswordRecoveryPage() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(recoverySchema),
    defaultValues: {
      email: ''
    }
  });

  return (
    <>
      <Head>
        <title>¿Olvidaste tu contraseña? - Volta Pets</title>
      </Head>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          component="header"
          sx={{ alignSelf: { xs: 'center', md: 'flex-start' }, mb: { xs: 4, md: 0 } }}
        >
          <Link href="/">
            <CardMedia
              component="img"
              image="/logo4.jpg"
              sx={{ width: { xs: 120, sm: 150 }, height: '100%', objectFit: 'contain' }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            width: 600,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%',
            maxWidth: 600,
            flex: 1
          }}
        >
          <Box component="header">
            <Typography
              variant="h3"
              sx={{ mb: 4, fontSize: { xs: '2em', md: '3em' } }}
              mb={4}
              align="center"
            >
              ¿Olvidaste tu contraseña?
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
            <Typography
              component="header"
              variant="body2"
              align="center"
              sx={{ fontSize: '0.8em', fontWeight: 300, mb: 4 }}
            >
              Ingresa tu dirección de correo electrónico y te enviaremos un vínculo para que puedas
              ingresar una nueva contraseña.
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit((data) => console.log(data))}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextInput
                control={control}
                name="email"
                labelText="Correo electrónico"
                errorName={errors.email}
                errorText={errors.email?.message}
                placeholder="ejemplo@mail.cl"
              />

              <Box component="footer" sx={{ my: 2 }}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="secondary"
                  type="submit"
                  sx={{ textTransform: 'inherit' }}
                >
                  Recuperar
                </Button>
              </Box>
            </Box>

            <Box
              component="footer"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                my: 2,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '0.8em' }}>
                ¿No tienes una cuenta?
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="body2" sx={{ fontSize: '0.8em' }}>
                  Regístrate
                </Typography>
                <Link
                  href="/registro/tutor"
                  underline="hover"
                  color="secondary"
                  variant="body2"
                  sx={{
                    fontSize: '0.8em',
                    '&:hover': { cursor: 'pointer', color: 'secondary.light' }
                  }}
                >
                  aquí
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PasswordRecoveryPage;
