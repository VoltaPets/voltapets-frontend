// Librerías
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Grid, Typography, Card, Button, Box, Avatar } from '@mui/material';

// Relative Imports
import FormInput from '../../../../commons/FormInput';
import AdminUserDisplay from '../AdminUserDisplay';
import { GET_ALL_TUTORES, GET_ALL_PASEADORES } from '../../../../../api/endpoints/Admin';
import { request } from '../../../../../api';

const UsuariosTab = () => {
  // State
  const [loading, setLoading] = useState(false);
  const [paseadores, setPaseadores] = useState([]);
  const [tutores, setTutores] = useState([]);

  // Hooks
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { nombre: '' } });

  // Funciones
  const onSubmit = (formData) => {
    console.log(formData);
  };

  const getTutores = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: GET_ALL_TUTORES,
        method: 'GET'
      });
      setTutores(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { mensaje } = error.response.data;
        enqueueSnackbar(mensaje, { variant: 'error' });
      } else {
        enqueueSnackbar('Error de conexión', { variant: 'error' });
      }
    }
  };

  const getPaseadores = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: GET_ALL_PASEADORES,
        method: 'GET'
      });
      setPaseadores(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { mensaje } = error.response.data;
        enqueueSnackbar(mensaje, { variant: 'error' });
      } else {
        enqueueSnackbar('Error de conexión', { variant: 'error' });
      }
    }
  };

  // Effects
  useEffect(() => {
    getTutores();
    getPaseadores();
  }, []);

  console.log('TUTORES:', tutores);
  console.log('PASEADORES:', paseadores);

  return (
    <Grid component={Card} variant="outlined" sx={{ borderRadius: 4, p: 2 }} container>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          Usuarios
        </Typography>
      </Grid>

      {/* Formulario */}
      <Grid item xs={12}>
        <Grid
          container
          component="form"
          noValidate
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'estar', mt: 2 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            width={6}
            labelText="Nombre"
            placeholderText="Buscar usuario"
            control={control}
            name="nombre"
            noMb
          />
          <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <Button
              variant="contained"
              color="info"
              sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              type="submit"
            >
              Buscar
            </Button>
          </Grid>

          {/* Tutores */}
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              p: 2
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}
            >
              Tutores
            </Typography>
            <Card
              variant="outlined"
              sx={{
                width: '100%',
                p: 2,
                bgcolor: '#f3f4f5',
                height: 195,
                overflowY: 'auto'
              }}
            >
              {loading ? (
                <BeatLoader color="#3f51b5" size={10} />
              ) : tutores.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  No hay usuarios registrados en la aplicación
                </Typography>
              ) : (
                tutores.map((tutor) => <AdminUserDisplay key={tutor.id} usuario={tutor} />)
              )}
            </Card>
          </Grid>

          {/* Paseadores */}
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              p: 2
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}
            >
              Paseadores
            </Typography>
            <Card
              variant="outlined"
              sx={{
                width: '100%',
                p: 2,
                bgcolor: '#f3f4f5',
                height: 212,
                overflowY: 'auto'
              }}
            >
              {loading ? (
                <BeatLoader color="#3f51b5" size={10} />
              ) : paseadores.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  No hay paseadores registrados en la aplicación
                </Typography>
              ) : (
                paseadores.map((paseador) => (
                  <AdminUserDisplay key={paseador.id} usuario={paseador} />
                ))
              )}
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UsuariosTab;
