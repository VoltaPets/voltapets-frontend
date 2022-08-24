// Librerias
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// MUI
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import KeyIcon from '@mui/icons-material/Key';
import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@mui/material';

// Relative imports
import FormInput from '../../src/components/commons/FormInput';
import FormSelect from '../../src/components/commons/FormSelect';
import Link from '../../src/components/commons/Link';
import { registerSchema } from '../../src/utils/validations';
import { regiones, comunas } from '../../src/mock/locations';
import { vivienda } from '../../src/mock/vivienda';

const formSettings = {
  defaultValues: {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    direccion: '',
    password: '',
    region: '',
    comuna: '',
    confirmarPassword: '',
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

  console.log(errors);

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
              textAlign: 'center',
              zIndex: -1
            }}
          />
          <Link href="/" sx={{ alignSelf: 'start' }}>
            <CardMedia
              component="img"
              image="/logo4.jpg"
              sx={{
                width: { xs: 120, sm: 150 },
                alignSelf: 'start',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Contenedor */}
          <Box
            sx={{
              my: { xs: 0, sm: 4 },
              width: '100%',
              maxWidth: 1200,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: 4
            }}
          >
            <Box component="header" sx={{ maxWidth: 520 }}>
              <Typography variant="h4" component="h1" align="center" mb={2}>
                Registro de <br />
                Tutor
              </Typography>
              <Typography
                variant="body1"
                component="p"
                align="center"
                mb={4}
                sx={{ letterSpacing: 1, fontSize: '0.9em' }}
              >
                En <strong style={{ color: '#E27149', fontSize: '1.2em' }}>Volta Pets</strong> te
                ofrecemos un espacio en donde puedes darle a tu compañero peludo un servicio
                integral y encontrar a los mejores paseadores para darle un mejor bienestar a tu
                mascota.
              </Typography>
            </Box>

            <Card elevation={4} sx={{ width: '100%', maxWidth: 520, px: 4, py: 2 }}>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" sx={{ textTransform: 'inherit', color: '#fff' }}>
                  Volver
                </Button>
              </Box>

              <Box
                component="form"
                sx={{ width: '100%' }}
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                {/* Información personal */}
                <Box component="section">
                  <Box sx={{ flex: 1, mt: 4 }}>
                    <Divider>
                      <AccountBoxIcon />
                    </Divider>
                  </Box>
                  <Grid container spacing={2}>
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
                      width={6}
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
                      width={6}
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
                      errorName={errors.telefono}
                      errorText={errors.telefono?.message}
                      type="tel"
                    />

                    {/* Correo */}
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
                </Box>

                {/* Información de la vivienda */}
                <Box component="section">
                  <Box sx={{ width: '100%', mt: 4 }}>
                    <Divider variant="fullWidth">
                      <MapsHomeWorkIcon />
                    </Divider>
                  </Box>
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

                    <FormSelect
                      width={6}
                      control={control}
                      name="region"
                      locations={regiones}
                      labelText="Regiones"
                      errorName={errors.region}
                      errorText={errors.region?.message}
                    />

                    <FormSelect
                      width={6}
                      control={control}
                      name="comuna"
                      locations={comunas}
                      labelText="Comunas"
                      errorName={errors.comuna}
                      errorText={errors.comuna?.message}
                    />

                    <FormInput
                      width={8}
                      control={control}
                      name="direccion"
                      labelText="Dirección"
                      placeholderText="av. Volta Pets 123"
                      errorName={errors.direccion}
                      errorText={errors.direccion?.message}
                      type="text"
                    />

                    <FormSelect
                      width={4}
                      control={control}
                      vivienda={vivienda}
                      name="tipoVivienda"
                      labelText="Depto / Casa"
                      errorName={errors.tipoVivienda}
                      errorText={errors.tipoVivienda?.message}
                    />
                  </Grid>
                </Box>

                {/* Contraseña */}
                <Box component="section">
                  <Box sx={{ width: '100%', mt: 4 }}>
                    <Divider variant="fullWidth">
                      <KeyIcon />
                    </Divider>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid component="header" item xs={12}>
                      <Typography variant="subtitle1" color="secondary" component="h2">
                        Contraseña
                      </Typography>
                    </Grid>

                    <FormInput
                      control={control}
                      name="password"
                      labelText="Contraseña"
                      placeholderText="********"
                      errorName={errors.password}
                      errorText={errors.password?.message}
                      type={showPassword ? 'text' : 'password'}
                      handleShowPassword={handleShowPassword}
                    />
                    <FormInput
                      control={control}
                      name="confirmarPassword"
                      labelText="Vuelve a ingresar tu contraseña"
                      placeholderText="********"
                      errorName={errors.confirmarPassword}
                      errorText={errors.confirmarPassword?.message}
                      type="password"
                    />
                  </Grid>
                </Box>

                {/* Actions */}
                <Box mb={2} mt={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    sx={{ textTransform: 'inherit', color: '#fff' }}
                  >
                    Registrarme
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPage;
