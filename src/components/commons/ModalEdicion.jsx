// Librerías
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Dialog, Box, Grid, Button, Typography, Switch, Divider } from '@mui/material';

// Relative imports
import FormSelect from './FormSelect';
import FormInput from './FormInput';
import { request } from '../../api';
import { schemaEdicionPerfil } from '../screens/private/paseador/perfil/editSchema';
import { UPDATE_PASEADOR_PROFILE, UPDATE_TUTOR_PROFILE } from '../../api/endpoints/Usuario';

const ModalEdicion = ({ open, onClose, comunas, tutor = false, Profile }) => {
  // Estados
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  // Hooks
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: { //TODO: Agregar valores como valor por defecto si existe
      isChangePassword: false,
      password: '',
      newPassword: '',
      confirmNewPassword: '',
      direccion: '',
      codigoComuna: '',
      departamento: 0,
      telefono: '',
      descripcion: ''
    },
    resolver: yupResolver(schemaEdicionPerfil)
  });

  // Funciones
  const onSubmit = async (editData) => {
    setLoading(true);
    try {
      await request({
        method: 'PUT',
        url: tutor ? UPDATE_TUTOR_PROFILE : UPDATE_PASEADOR_PROFILE,
        data: editData
      });

      setLoading(false);
      enqueueSnackbar('Perfil actualizado correctamente', { variant: 'success' });
      onClose();
      window.location.reload(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      }
      console.log(error.message);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box sx={{ p: 2 }}>
        <Box component="header">
          <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
            Editar perfil
          </Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Box sx={{ display: 'flex', flex: 1, gap: 4 }}>
            {/* Comunas, Dirección, Email y Telefono */}
            <Box sx={{ flex: 0.5 }}>
              <FormSelect
                comuna
                control={control}
                name="codigoComuna"
                label="Comuna"
                dataArray={comunas}
                labelText="Comunas"
                errorName={errors.codigoComuna}
                errorText={errors.codigoComuna?.message}
              />
              <Grid container spacing={2}>
                <FormInput
                  control={control}
                  name="direccion"
                  labelText="Dirección"
                  placeholderText="Ingrese su dirección"
                  errorName={errors.direccion}
                  errorText={errors.direccion?.message}
                  width={7}
                />
                <FormInput
                  control={control}
                  name="departamento"
                  labelText="Depto"
                  placeholderText="Ingrese su departamento"
                  errorName={errors.departamento}
                  errorText={errors.departamento?.message}
                  width={5}
                />
                <FormInput
                  control={control}
                  name="telefono"
                  labelText="Telefono"
                  placeholderText="+569 1234 5678"
                  maxLength={12}
                  type="tel"
                  errorName={errors.telefono}
                  errorText={errors.telefono?.message}
                />
                <Grid item xs={12} sx={{ mb: 4 }}>
                  <FormInput
                    control={control}
                    variant="outlined"
                    multiline
                    rows={5}
                    name="descripcion"
                    labelText="Descripción"
                    placeholderText="Descripción"
                    type="text"
                    maxLength={500}
                    errorName={errors.descripcion}
                    errorText={errors.descripcion?.message}
                  />
                </Grid>
              </Grid>
            </Box>

            <Divider orientation="vertical" flexItem />
            {/* Descripción y contraseñas */}
            <Box sx={{ flex: 0.5 }}>
              <Grid container>
                <Grid item xs={12} sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                  <Switch
                    {...register('isChangePassword')}
                    checked={isChangePassword}
                    onChange={() => setIsChangePassword(!isChangePassword)}
                  />
                  <Typography variant="caption">Habilitar cambio de contraseña</Typography>
                </Grid>
                <FormInput
                  pwd
                  disabled={!isChangePassword}
                  control={control}
                  name="password"
                  labelText="Contraseña Antigua"
                  placeholderText="******"
                  type={showPassword ? 'text' : 'password'}
                  errorName={errors.password}
                  errorText={errors.password?.message}
                  handleShowPassword={() => setShowPassword(!showPassword)}
                />
                <FormInput
                  pwd
                  disabled={!isChangePassword}
                  control={control}
                  name="newPassword"
                  labelText="Nueva Contraseña"
                  placeholderText="******"
                  type={showNewPassword ? 'text' : 'password'}
                  errorName={errors.password}
                  errorText={errors.password?.message}
                  handleShowPassword={() => setShowNewPassword(!showNewPassword)}
                />
                <FormInput
                  disabled={!isChangePassword}
                  control={control}
                  name="confirmNewPassword"
                  labelText="Confirmar Nueva Contraseña"
                  placeholderText="******"
                  type="password"
                  errorName={errors.password}
                  errorText={errors.password?.message}
                />
              </Grid>
            </Box>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2, width: '100%', textTransform: 'inherit', fontWeight: 'bold' }}
              onClick={() => {
                reset();
                onClose();
              }}
            >
              Cancelar
            </Button>
            <Button
              disabled={loading}
              type="submit"
              color="info"
              variant="contained"
              sx={{ mt: 2, width: '100%', textTransform: 'inherit', fontWeight: 'bold' }}
            >
              {loading ? <BeatLoader size={10} /> : 'Guardar'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModalEdicion;
