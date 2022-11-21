// Librería
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

// MUI
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Box, Card, CircularProgress, Grid, Typography, Button } from '@mui/material';

// Relative imports
import LayoutRegistro from '../../src/components/screens/public/registro/LayoutRegistro';
import FormInput from '../../src/components/commons/FormInput';
import FormSelect from '../../src/components/commons/FormSelect';
import { schemaRegistroPaseador } from '../../src/utils/validations';
import RegistroModal from '../../src/components/screens/public/registro/RegistroModal';
import { CREATE_PASEADOR, CREATE_USER_IMG } from '../../src/api/endpoints/Usuario';
import { GET_COMUNAS, GET_REGIONES } from '../../src/api/endpoints/Ubicacion';
import { CLOUDINARY_URL } from '../../src/constant';
import { request } from '../../src/api';

const formSettings = {
  defaultValues: {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    direccion: '',
    departamento: 0,
    rutDv: '',
    imagen: null,
    password: '',
    confirmPassword: '',
    region: 7,
    codigoComuna: ''
  },
  resolver: yupResolver(schemaRegistroPaseador)
};

function PaseadorRegisterPage() {
  // Estados
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState(null);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgPath, setImgPath] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [comunas, setComunas] = useState([]);
  const [regiones, setRegiones] = useState([]);

  // Hooks
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    resetField,
    reset,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm(formSettings);

  // Funciones
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleImageChange = (e) => {
    let imagenElegida = document.getElementById('chosen-image');
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.readAsDataURL(file);
    reader.onload = () => {
      imagenElegida.src = reader.result;
    };
  };

  const handleImageDelete = () => {
    let imagenElegida = document.getElementById('chosen-image');
    imagenElegida.src = '/logo.jpg';
    resetField('imagen');
  };

  const onSubmit = async (dataFormulario) => {
    setLoading(true);
    try {
      const { data } = await request({
        url: CREATE_PASEADOR,
        method: 'POST',
        data: dataFormulario
      });
      setUserId(data.codigoUsuario);

      const formData = new FormData();
      formData.append('file', dataFormulario.imagen[0]);
      formData.append('upload_preset', 'profile');
      setFile(formData);
    } catch (error) {
      setLoading(false);
      console.log('Error al crear usuario: ', error);
    }
  };

  const uploadImage = async (formData) => {
    try {
      const data = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData
      }).then((res) => res.json());
      const imgUrl = new URL(data.secure_url);
      setImgUrl(imgUrl.origin);
      setImgPath(imgUrl.pathname);
    } catch (error) {
      setLoading(false);
      console.log('Error Upload to Cloud: ', error);
    }
  };

  const updateUserImage = async () => {
    const imgData = {
      codigoUsuario: userId,
      url: imgUrl,
      path: imgPath
    };

    try {
      await request({
        url: CREATE_USER_IMG,
        method: 'PUT',
        data: imgData
      });
      enqueueSnackbar('Usuario creado con éxito', { variant: 'success' });
      setOpen(true);
      setLoading(false);
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

  const obtenerComunas = async () => {
    try {
      const { data } = await request({
        url: GET_COMUNAS(7),
        method: 'GET'
      });
      setComunas(data);
    } catch (error) {
      console.log('Error al obtener comunas: ', error);
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
      console.log('Error al obtener regiones: ', error);
    }
  };

  // Efectos
  useEffect(() => {
    obtenerRegiones();
    obtenerComunas();
  }, []);

  useEffect(() => {
    if (userId) {
      uploadImage(file);
    }
  }, [userId]);

  useEffect(() => {
    if (imgUrl && imgPath) {
      updateUserImage();
    }
    return () => {
      setImgUrl(null);
      setImgPath(null);
    };
  }, [imgUrl, imgPath]);

  return (
    <LayoutRegistro titulo="Registro de paseador">
      <RegistroModal paseador open={open} setOpen={setOpen} reset={reset} />

      {/* Formulario */}
      <Card
        elevation={4}
        sx={{ width: '100%', maxWidth: 520, px: 4, py: 2, bgcolor: 'rgba(255,255,255, 0.96)' }}
      >
        <Box component="form" sx={{ width: '100%' }} noValidate onSubmit={handleSubmit(onSubmit)}>
          {/* Información personal */}
          <Grid component="section" container spacing={2} mb={4}>
            <Grid
              component="header"
              item
              xs={12}
              sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
            >
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

            {/* Apellidos */}
            <FormInput
              width={6}
              control={control}
              name="apellido"
              labelText="Apellidos"
              placeholderText="Malamute"
              errorName={errors.apellido}
              errorText={errors.apellido?.message}
              type="text"
            />

            {/* Correo */}
            <FormInput
              width={7}
              control={control}
              name="email"
              labelText="Correo"
              placeholderText="husky@voltapets.cl"
              errorName={errors.email}
              errorText={errors.email?.message}
              type="text"
            />

            {/* Teléfono */}
            <FormInput
              width={5}
              control={control}
              name="telefono"
              labelText="Telefono"
              placeholderText="+56912345678"
              maxLength={12}
              errorName={errors.telefono}
              errorText={errors.telefono?.message}
              type="tel"
            />

            {/* Rut */}
            <FormInput
              control={control}
              name="rutDv"
              labelText="Rut"
              maxLength={10}
              errorName={errors.rutDv}
              errorText={errors.rutDv?.message}
              type="text"
            />
          </Grid>

          {/* Foto de Perfil */}
          <Grid component="section" container mb={4}>
            <Grid item xs={12} sx={{ border: 1, borderColor: 'divider', borderRadius: 4, p: 2 }}>
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                Foto de perfil
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <input
                    type="file"
                    {...register('imagen', { required: true })}
                    onChange={handleImageChange}
                  />
                  <Button
                    variant="text"
                    sx={{ fontWeight: 'bold', textTransform: 'none' }}
                    onClick={handleImageDelete}
                  >
                    Borrar
                  </Button>
                </Box>
                <img
                  id="chosen-image"
                  src="/logo.jpg"
                  style={{ width: 200, height: 200, objectFit: 'cover' }}
                />
              </Box>

              <Typography variant="body2" color="secondary" component="p">
                {errors.imagen && 'Debes subir una foto de perfil'}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p" mt={2}>
                Sube una foto de perfil para que los tutores puedan reconocerte.
              </Typography>
            </Grid>
          </Grid>

          {/* Información de la vivienda */}
          <Grid component="section" container spacing={2} mb={4}>
            <Grid
              component="header"
              item
              xs={12}
              sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
            >
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
          <Box mb={2} mt={4}>
            <Button
              disabled={loading}
              fullWidth
              variant="contained"
              type="submit"
              sx={{ textTransform: 'inherit', color: '#fff', fontWeight: 'bold' }}
            >
              {loading ? <CircularProgress color="inherit" /> : 'Registrarme'}
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
          Paseador
        </Typography>
        <Typography
          variant="body1"
          component="p"
          align="center"
          mb={2}
          sx={{ letterSpacing: 1, fontSize: '0.9em' }}
        >
          En <strong style={{ color: '#E27149', fontSize: '1.2em' }}>Volta Pets</strong> te damos la
          oportunidad de ser parte de nuestra comunidad de{' '}
          <strong style={{ color: '#E27149', fontSize: '1.2em' }}>paseadores</strong> y así poder
          generar ingresos extras mientras disfrutas de la compañía del mejor amigo del hombre.
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
}

export default PaseadorRegisterPage;
