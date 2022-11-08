// Librerias
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

// MUI
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import KeyIcon from '@mui/icons-material/Key';
import { Box, Button, Card, CircularProgress, Grid, Typography } from '@mui/material';

// Relative imports
import FormInput from '../../src/components/commons/FormInput';
import FormSelect from '../../src/components/commons/FormSelect';
import { schemaRegistroTutor } from '../../src/utils/validations';
import { regiones, comunas } from '../../src/mock/dataArray';
import LayoutRegistro from '../../src/components/screens/public/registro/LayoutRegistro';
import { CREATE_TUTOR } from '../../src/api/endpoints/Usuario';
import { request } from '../../src/api';
import RegistroModal from '../../src/components/screens/public/registro/RegistroModal';

const formSettings = {
  defaultValues: {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    direccion: '',
    departamento: 0,
    password: '',
    confirmPassword: '',
    region: 1,
    codigoComuna: 0
  },
  resolver: yupResolver(schemaRegistroTutor)
};

const TutorRegisterPage = () => {
  // Estados
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Hooks
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm(formSettings);

  // Funciones
  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const { data } = await request({
        url: CREATE_TUTOR,
        method: 'POST',
        data: formData
      });

      enqueueSnackbar(data.mensaje, { variant: 'success' });
      setLoading(false);
      setOpen(true);
    } catch (error) {
      if (error.isAxiosError) {
        setLoading(false);
        const { data } = error.response;

        if (data?.errors) {
          for (const error in data.errors) {
            data.errors[error].map((e) => enqueueSnackbar(e, { variant: 'error' }));
          }
        }

        if (data?.mensaje) {
          enqueueSnackbar(data.mensaje, { variant: 'error' });
        }
      } else {
        enqueueSnackbar('Error al agregar usuario', { variant: 'error' });
      }
    }
  };

  console.log(errors);

  return (
    <LayoutRegistro titulo="Registro de tutor">
      <RegistroModal open={open} setOpen={setOpen} reset={reset} />
      {/* Formulario */}
      <Card
        elevation={4}
        sx={{ width: '100%', maxWidth: 520, px: 4, py: 2, bgcolor: 'rgba(255,255,255, 0.96)' }}
      >
        <Box
          component="form"
          sx={{ width: '100%' }} // (data) => console.log(data)
          onSubmit={handleSubmit(onSubmit)}
          noValidate
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
              name="email"
              labelText="Correo"
              placeholderText="husky@voltapets.cl"
              errorName={errors.email}
              errorText={errors.email?.message}
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
              disabled
              width={6}
              control={control}
              name="region"
              dataArray={regiones}
              labelText="Regiones"
              errorName={errors.region}
              errorText={errors.region?.message}
            />

            {/* Comuna */}
            <FormSelect
              width={6}
              control={control}
              name="codigoComuna"
              dataArray={comunas}
              labelText="Comunas"
              errorName={errors.codigoComuna}
              errorText={errors.codigoComuna?.message}
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

            {/* Depto (opcional) */}
            <FormInput
              width={4}
              control={control}
              name="departamento"
              labelText="Nº Departamento"
              placeholderText="(Opcional)"
              errorName={errors.departamento}
              errorText={errors.departamento?.message}
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
              name="confirmPassword"
              labelText="Vuelve a ingresar tu contraseña"
              placeholderText="********"
              errorName={errors.confirmPassword}
              errorText={errors.confirmPassword?.message}
              type="password"
            />
          </Grid>

          {/* Actions */}
          <Box
            mb={2}
            mt={4}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Button
              disabled={loading}
              fullWidth
              variant="contained"
              type="submit"
              sx={{ textTransform: 'inherit', color: '#fff', fontWeight: 'bold' }}
            >
              {loading ? <CircularProgress color="inherit" /> : 'Registrarse'}
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
        <Typography variant="body1" component="p" align="justify" mb={2}>
          En <strong style={{ color: '#E27149', fontSize: '1.2em' }}>Volta Pets</strong> te
          ofrecemos un espacio en donde puedes darle a tu compañero peludo un servicio integral y
          encontrar a los mejores paseadores para darle un mejor bienestar a tu mascota.
        </Typography>

        <Typography variant="body1" component="p" align="justify" mb={2}>
          <strong style={{ color: '#E27149', fontSize: '1.2em' }}>Advertencia</strong> las razas de
          perros potencialmente peligrosos (PPP) no pueden ser registrados en{' '}
          <strong style={{ color: '#E27149', fontSize: '1.2em' }}>Volta Pets</strong> .
        </Typography>
        <Box component="footer" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={() => push('/')}
            sx={{ textTransform: 'inherit', color: '#fff', fontWeight: 'bold' }}
          >
            Volver al inicio
          </Button>
        </Box>
      </Card>
    </LayoutRegistro>
  );
};

export default TutorRegisterPage;
