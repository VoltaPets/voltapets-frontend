// Librería
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

// MUI
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Box, Card, CardMedia, Grid, Typography, Button } from '@mui/material';

// Relative imports
import LayoutRegistro from '../../src/components/screens/public/registro/LayoutRegistro';
import FormInput from '../../src/components/commons/FormInput';
import FormSelect from '../../src/components/commons/FormSelect';
import FilePicker from '../../src/components/commons/FilePicker';
import { comunas, regiones } from '../../src/mock/dataArray';
import { schemaRegistroPaseador } from '../../src/utils/validations';
import RegistroModal from '../../src/components/screens/public/registro/RegistroModal';

// TODO: Agregar envío de foto de perfil al backend
const formSettings = {
  defaultValues: {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    rut: '',
    direccion: '',
    imagen: null,
    region: 1,
    depto: 0,
    codigoComuna: '',
    password: '',
    confirmarPassword: ''
  },
  resolver: yupResolver(schemaRegistroPaseador)
};

function PaseadorRegisterPage() {
  // Estados
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  // Hooks
  const { push } = useRouter();
  const {
    watch,
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful }
  } = useForm(formSettings);

  // Funciones
  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log('Data: ', data);
    console.log('Errors: ', errors);
  };

  // Effects
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log('Value: ', value.depto);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <LayoutRegistro titulo="Registro de paseador">
      <RegistroModal open={open} setOpen={setOpen} />

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
              width={6}
              control={control}
              name="correo"
              labelText="Correo"
              placeholderText="husky@voltapets.cl"
              errorName={errors.correo}
              errorText={errors.correo?.message}
              type="text"
            />

            {/* Teléfono */}
            <FormInput
              width={6}
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
              name="rut"
              labelText="Rut"
              maxLength={10}
              errorName={errors.rut}
              errorText={errors.rut?.message}
              type="text"
            />
          </Grid>

          {/* Foto de Perfil */}
          <Grid component="section" container mb={4}>
            <Grid item xs={12} sx={{ border: 1, borderColor: 'divider', borderRadius: 4, p: 2 }}>
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                Foto de perfil
              </Typography>
              <input type={'file'} {...register('imagen', { required: true })} />
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
              name="depto"
              labelText="Nº Departamento"
              placeholderText="(Opcional)"
              errorName={errors.depto}
              errorText={errors.depto?.message}
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
              sx={{ textTransform: 'inherit', color: '#fff', fontWeight: 'bold' }}
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
