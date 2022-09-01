// Librerias
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

// MUI
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import KeyIcon from '@mui/icons-material/Key';
import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@mui/material';

// Relative imports
import FormInput from '../../src/components/commons/FormInput';
import FormSelect from '../../src/components/commons/FormSelect';
import Link from '../../src/components/commons/Link';
import { schemaRegistroTutor } from '../../src/utils/validations';
import { regiones, comunas } from '../../src/mock/locations';
import { vivienda } from '../../src/mock/vivienda';
import LayoutRegistro from '../../src/components/screens/public/registro/LayoutRegistro';

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
    confirmarPassword: ''
  },
  resolver: yupResolver(schemaRegistroTutor)
};

const TutorRegisterPage = () => {
  // Estados
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(formSettings);

  // Funciones
  const handleShowPassword = () => setShowPassword(!showPassword);

  console.log(errors);

  return (
    <LayoutRegistro titulo="Registro de tutor">
      {/* Formulario */}
      <Card
        elevation={4}
        sx={{ width: '100%', maxWidth: 520, px: 4, py: 2, bgcolor: 'rgba(255,255,255, 0.96)' }}
      >
        <Box
          component="form"
          sx={{ width: '100%' }}
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          {/* Información personal */}
          <Grid component="section" container spacing={2} mb={4}>
            <Grid
              component="header"
              item
              xs={12}
              sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
            >
              <AccountBoxIcon />
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

          {/* Información de la vivienda */}
          <Grid component="section" container spacing={2} mb={4}>
            <Grid
              component="header"
              item
              xs={12}
              sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
            >
              <MapsHomeWorkIcon />
              <Typography
                variant="subtitle1"
                color="secondary"
                component="h2"
                sx={{ textAlign: 'left' }}
              >
                Domicilio
              </Typography>
            </Grid>

            {/* Región */}
            <FormSelect
              width={6}
              control={control}
              name="region"
              locations={regiones}
              labelText="Regiones"
              errorName={errors.region}
              errorText={errors.region?.message}
            />

            {/* Comuna */}
            <FormSelect
              width={6}
              control={control}
              name="comuna"
              locations={comunas}
              labelText="Comunas"
              errorName={errors.comuna}
              errorText={errors.comuna?.message}
            />

            {/* Dirección */}
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
          </Grid>

          {/* Contraseña */}
          <Grid component="section" container spacing={2} mb={4}>
            <Grid
              component="header"
              item
              xs={12}
              sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
            >
              <KeyIcon />
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

      {/* Presentación */}
      <Card
        elevation={2}
        component="header"
        sx={{
          maxWidth: { xs: 520, md: 420 },
          py: 2,
          px: 6,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          position: { xs: 'static', md: 'sticky' },
          top: 20
        }}
      >
        <Typography variant="h4" component="h1" align="center" mb={2}>
          Registro de <br />
          Tutor
        </Typography>
        <Typography
          variant="body1"
          component="p"
          align="center"
          mb={2}
          sx={{ letterSpacing: 1, fontSize: '0.9em' }}
        >
          En <strong style={{ color: '#E27149', fontSize: '1.2em' }}>Volta Pets</strong> te
          ofrecemos un espacio en donde puedes darle a tu compañero peludo un servicio integral y
          encontrar a los mejores paseadores para darle un mejor bienestar a tu mascota.
        </Typography>
        <Box component="footer" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={() => push('/')}
            sx={{ textTransform: 'inherit', color: '#fff' }}
          >
            Volver al inicio
          </Button>
        </Box>
      </Card>
    </LayoutRegistro>
  );
};

export default TutorRegisterPage;
