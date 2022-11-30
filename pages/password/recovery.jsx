// Libreries
import { useEffect, useState } from 'react';
import Head from 'next/head';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Button, CardMedia, Typography } from '@mui/material';

// Relative imports
import { recoverySchema } from '../../src/utils/validations';
import FormInput from '../../src/components/commons/FormInput';
import Link from '../../src/components/commons/Link';
import { FORGET_PASSWORD } from '../../src/api/endpoints/Usuario';
import { request } from '../../src/api';

function PasswordRecoveryPage() {
  // States
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Hooks
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(recoverySchema),
    defaultValues: {
      email: ''
    }
  });

  // Funciones
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await request({
        url: FORGET_PASSWORD,
        method: 'POST',
        data
      });
      reset();
      setLoading(false);
      setEmailSent(true);
      enqueueSnackbar('Se ha enviado un correo a tu cuenta de correo', {
        variant: 'success'
      });
    } catch (error) {
      setLoading(false);
      const { mensaje } = error.response.data;
      enqueueSnackbar(mensaje, {
        variant: 'error'
      });
    }
  };

  const handleGoBack = () => {
    setEmailSent(false);
    reset();
    push('/usuarios/login');
  };

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
              image="/logo.jpg"
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
              sx={{ mb: 4, fontSize: { xs: '2em', md: '3em' }, fontWeight: 'bold' }}
              mb={4}
              align="center"
            >
              ¿Olvidaste tu contraseña?
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
            {emailSent ? (
              <>
                <Typography variant="body1" sx={{ mb: 2 }} align="center">
                  Se ha enviado un correo a tu cuenta de correo con las instrucciones para recuperar
                  tu contraseña.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }} align="center">
                  Si no lo encuentras, revisa tu bandeja de spam.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    color="info"
                    fullWidth
                    sx={{ mt: 2, mb: 4, fontWeight: 'bold', textTransform: 'none' }}
                    onClick={handleGoBack}
                  >
                    Ir al inicio de sesión
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography component="header" variant="body1" align="center" sx={{ mb: 4 }}>
                  Ingresa tu dirección de correo electrónico y te enviaremos un vínculo para que
                  puedas ingresar una nueva contraseña.
                </Typography>

                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <FormInput
                    noMb
                    control={control}
                    name="email"
                    disabled={loading}
                    labelText="Correo electrónico"
                    errorName={errors.email}
                    errorText={errors.email?.message}
                    placeholder="ejemplo@mail.cl"
                  />

                  <Box component="footer" sx={{ my: 2 }}>
                    <Button
                      fullWidth
                      disabled={loading}
                      size="large"
                      variant="contained"
                      color="secondary"
                      type="submit"
                      sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
                    >
                      {loading ? <BeatLoader size={10} /> : 'Recuperar'}
                    </Button>
                  </Box>
                </Box>
              </>
            )}
            <Box
              component="footer"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                my: 2,
                mx: 'auto',
                p: 2,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                border: 1,
                borderRadius: 4,
                width: 'fit-content'
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '0.8em' }}>
                ¿No tienes una cuenta?
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/registro/tutor">
                  <Typography
                    color="info.main"
                    variant="body2"
                    sx={{
                      fontSize: '0.8em',
                      fontWeight: 'bold',
                      transition: '0.3s',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    Regístrate
                  </Typography>
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
