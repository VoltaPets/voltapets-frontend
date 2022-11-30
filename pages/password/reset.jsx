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

// Relative Imports
import Link from '../../src/components/commons/Link';
import FormInput from '../../src/components/commons/FormInput';
import { RESET_PASSWORD } from '../../src/api/endpoints/Usuario';
import { request } from '../../src/api';

const resetPwdSchema = yup.object().shape({
  password: yup
    .string()
    .required('Debes ingresar una contraseña')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-\.,]).{6,}$/g,
      'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
    )
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20, 'La contraseña debe tener menos de 20 caracteres'),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Debes confirmar la contraseña')
});

const ResetPwdPage = () => {
  // States
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const { query, push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    },
    resolver: yupResolver(resetPwdSchema)
  });

  // Funciones
  const onSubmit = async (data) => {
    setLoading(true);

    const form = dataFormatted(data);
    console.log(form);
    try {
      await request({
        url: RESET_PASSWORD,
        method: 'POST',
        data: form
      });
      setLoading(false);
      reset();
      push('/usuarios/login');
      enqueueSnackbar('Contraseña actualizada correctamente', {
        variant: 'success'
      });
      // push('/usuarios/login');
    } catch (error) {
      setLoading(false);
      const { mensaje } = error.data;
      mensaje && enqueueSnackbar(mensaje, { variant: 'error' });
    }
  };

  const dataFormatted = (formData) => {
    const email = query.email;
    const token = query.token;
    return { ...formData, email, token };
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Head>
        <title>Restablece tu contraseña - Volta Pets</title>
      </Head>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 8 }}>
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
              Restablece tu contraseña
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
            <Typography component="header" variant="body1" align="justify" sx={{ mb: 4 }}>
              Que bueno verte de nuevo, a continuación podrás restablecer tu contraseña. Recuerda
              que tu contraseña debe tener al menos{' '}
              <strong>
                6 caracteres, una mayúscula, una minúscula, un número y un caracter especial
              </strong>
              .
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
              <strong>Ejemplo:</strong> @VoltaPets2022
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}
            >
              <FormInput
                noMb
                disabled={loading}
                control={control}
                name="password"
                labelText="Nueva Contraseña"
                placeholderText="********"
                errorName={errors.password}
                errorText={errors.password?.message}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
              <FormInput
                noMb
                control={control}
                name="confirmPassword"
                disabled={loading}
                labelText="Confirmar Contraseña"
                errorName={errors.confirmPassword}
                errorText={errors.confirmPassword?.message}
                placeholderText="********"
                type="password"
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
                  {loading ? <BeatLoader size={10} /> : 'Restablecer contraseña'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResetPwdPage;
