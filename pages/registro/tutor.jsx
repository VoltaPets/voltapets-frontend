// Librerias
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// MUI
import { Box, Button, Card, FormControl, Select, Grid, Typography, TextField } from '@mui/material';

// Relative imports
import FormInput from '../../src/components/commons/FormInput';
import { registerSchema } from '../../src/utils/validations';

const formSettings = {
  defaultValues: {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    direccion: '',
    contraseña: '',
    confirmarContraseña: '',
    tipoVivienda: ''
  },
  resolver: yupResolver(registerSchema)
};

const RegisterPage = () => {
  // States
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(formSettings);

  // Functions
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Head>
        <title>Registro Tutor - Volta Pets</title>
      </Head>
      <Grid component="main" container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundImage: 'url(/images/dog-walk-couple.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70%',
            backgroundPosition: 'center'
          }}
        >
          {/* Fondo blanco transparente */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              bgcolor: 'rgba(255,255,255,0.72)',
              width: '100%',
              height: '100%',
              textAlign: 'center'
            }}
          />

          {/* Contenedor */}
          <Box
            sx={{
              width: '100%',
              maxWidth: 1200,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: 4,
              zIndex: 20
            }}
          >
            <Box component="header" sx={{ maxWidth: 520 }}>
              <Typography variant="h4" component="h1" align="center" mb={2}>
                Regístrate en <br />
                Volta Pets
              </Typography>
              <Typography
                variant="body1"
                component="p"
                align="center"
                mb={4}
                sx={{ letterSpacing: 1, fontSize: '0.9em' }}
              >
                En Volta Pets te ofrecemos un espacio en donde puedes darle a tu compañero peludo un
                servicio integral. Además, puedes encontrar a los mejores cuidadores para tu
                mascota.
              </Typography>
            </Box>
            <Card variant="outlined" sx={{ width: '100%', maxWidth: 520, p: 2 }}>
              <Box component="form" sx={{ width: '100%' }}>
                {/* Información personal */}
                <Grid container spacing={2} mb={4}>
                  <Grid component="header" item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      component="h2"
                      sx={{ textAlign: 'left' }}
                    >
                      Información personal
                    </Typography>
                  </Grid>

                  {/* Nombre */}
                  <FormInput
                    half
                    control={control}
                    name="nombre"
                    labelText="Nombre"
                    placeholderText="Husky"
                    errorName={errors.nombre}
                    errorText={errors.nombre?.message}
                    type="text"
                  />

                  {/* Apellido */}
                  <FormInput
                    half
                    control={control}
                    name="apellido"
                    labelText="Apellido"
                    placeholderText="Malamute"
                    errorName={errors.apellido}
                    errorText={errors.apellido?.message}
                    type="text"
                  />

                  {/* Teléfono */}
                  <FormInput
                    control={control}
                    name="telefono"
                    labelText="Telefono"
                    placeholderText="+56912345678"
                    maxLength={12}
                    errorName={errors.correo}
                    errorText={errors.correo?.message}
                    type="tel"
                  />

                  <FormInput
                    control={control}
                    name="correo"
                    labelText="Correo"
                    placeholderText="husky@voltapets.cl"
                    errorName={errors.correo}
                    errorText={errors.correo?.message}
                    type="text"
                  />
                </Grid>

                <Grid container spacing={2}>
                  <Grid component="header" item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      component="h2"
                      sx={{ textAlign: 'left' }}
                    >
                      Domicilio
                    </Typography>
                  </Grid>
                  <FormInput
                    control={control}
                    name="correo"
                    labelText="Correo"
                    placeholderText="husky@voltapets.cl"
                    errorName={errors.correo}
                    errorText={errors.correo?.message}
                    type="text"
                  />
                  <Grid item xs={12}>
                    <TextField fullWidth label="Contraseña" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Confirmar contraseña" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Teléfono" variant="outlined" />
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPage;
