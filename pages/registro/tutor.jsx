// Librerias
import { useState, useEffect } from 'react';
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
import LayoutRegistro from '../../src/components/screens/public/registro/LayoutRegistro';
import RegistroModal from '../../src/components/screens/public/registro/RegistroModal';
import { CREATE_TUTOR, CREATE_USER_IMG } from '../../src/api/endpoints/Usuario';
import { CLOUDINARY_DEFAULT_IMAGE, CLOUDINARY_DEFAULT_PUBLIC_ID } from '../../src/constant/';
import { GET_COMUNAS, GET_REGIONES } from '../../src/api/endpoints/Ubicacion';
import { request } from '../../src/api';

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
    region: 7,
    codigoComuna: ''
  },
  resolver: yupResolver(schemaRegistroTutor)
};

const TutorRegisterPage = () => {
  // Estados
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [regiones, setRegiones] = useState([]);
  const [comunas, setComunas] = useState([]);

  // Hooks
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    watch,
    control,
    handleSubmit,
    reset,
    register,
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
      setUserId(data.codigoTutor);
    } catch (error) {
      setLoading(false);
      console.log(error);
      enqueueSnackbar('Error al crear el usuario', { variant: 'error' });
    }
  };

  const updateUserImage = async () => {
    const img = new URL(CLOUDINARY_DEFAULT_IMAGE);
    const imgUrl = img.origin;
    const imgPath = img.pathname;

    const imgData = {
      codigoUsuario: userId,
      url: imgUrl,
      path: imgPath,
      public_id: CLOUDINARY_DEFAULT_PUBLIC_ID
    };

    try {
      await request({
        url: CREATE_USER_IMG,
        method: 'PUT',
        data: imgData
      });

      enqueueSnackbar('Usuario creado correctamente', { variant: 'success' });
      setOpen(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      enqueueSnackbar('Error al agregar imagen', { variant: 'error' });
    }
  };

  const obtenerRegiones = async () => {
    try {
      const { data } = await request({
        url: GET_REGIONES,
        method: 'GET'
      });
      setRegiones(data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerComunas = async () => {
    try {
      const { data } = await request({
        url: GET_COMUNAS(7),
        method: 'GET'
      });
      setComunas(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Effects
  useEffect(() => {
    if (userId) {
      updateUserImage();
    }
    return () => {
      setUserId(null);
    };
  }, [userId]);

  useEffect(() => {
    obtenerRegiones();
    obtenerComunas();
  }, []);

  return (
    <LayoutRegistro titulo="Registro de tutor">
      <RegistroModal open={open} setOpen={setOpen} reset={reset} />
      {/* Formulario */}
      <Card
        elevation={4}
        sx={{ width: '100%', maxWidth: 520, px: 4, py: 2, bgcolor: 'rgba(255,255,255, 0.96)' }}
      >
        <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)} noValidate>
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
              region
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
              comuna
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
