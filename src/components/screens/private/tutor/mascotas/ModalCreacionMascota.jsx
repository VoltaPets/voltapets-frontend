// Librerías
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import {
  Dialog,
  Grid,
  Card,
  CardMedia,
  Divider,
  Button,
  IconButton,
  Box,
  Typography
} from '@mui/material';

// Relative imports
import CardMascotaRegistrada from './CardMascotaRegistrada';
import FormInput from '../../../../commons/FormInput';
import FormSelect from '../../../../commons/FormSelect';
import FormRadio from '../../../../commons/FormRadio';
import FormDatePicker from '../../../../commons/FormDatePicker';
import { mascotaSchema } from '../../../private/tutor/mascotas/mascotaValidation';
import { request } from '../../../../../api';
import { CREATE_MASCOTA, GET_MASCOTAS } from '../../../../../api/endpoints/Mascota';

const ModalCreacionMascota = ({ open, onClose, razas, sizes, sexo }) => {
  // Estados
  const [mascotaSelected, setMascotaSelected] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mascotasList, setMascotasList] = useState([]);

  //Hooks
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      nombre: '',
      descripcion: '',
      fechaNacimiento: null,
      isFechaNacimiento: false,
      isYear: true,
      esterilizado: false,
      edadRegistro: '',
      codigoSexo: '',
      codigoTamanio: '',
      codigoRaza: ''
    },
    resolver: yupResolver(mascotaSchema)
  });

  // Funciones
  const handleSelected = (mascota) => {
    setMascotaSelected(mascota);
    setEditMode(true);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const getMascotas = async () => {
    try {
      const { data } = await request({
        url: GET_MASCOTAS,
        method: 'GET'
      });
      setMascotasList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (mascotaData) => {
    setLoading(true);
    try {
      const { data } = await request({
        method: 'POST',
        url: CREATE_MASCOTA,
        data: mascotaData
      });
      console.log(data);
      setLoading(false);
      handleClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Effectos
  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    getMascotas();
  }, []);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ textTransform: 'inherit', fontWeight: 'bold', flex: 0.1 }}
          onClick={handleClose}
        >
          Cerrar
        </Button>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Administrar Mis Mascota
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Typography variant="subtitle2" sx={{ textAlign: 'justify' }}>
            En este panel podrás administrar tus mascotas, puedes crear, editar o eliminar una
            mascota. Para crear una mascota debes llenar todos los campos del formulario y dar click
            en el botón "Crear Mascota". Para editar o eliminar una mascota debes seleccionar una
            mascota de la lista y dar click en el botón "Editar" o "Eliminar" respectivamente.
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
            Mascotas Registradas
          </Typography>
          <Grid container spacing={2} sx={{ maxHeight: 268, overflowY: 'scroll', mb: 2 }}>
            {mascotasList.length > 0 ? (
              mascotasList.map((mascota) => (
                <CardMascotaRegistrada
                  key={mascota.id}
                  mascota={mascota}
                  handleSelected={handleSelected}
                />
              ))
            ) : (
              <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                No tienes mascotas registradas
              </Typography>
            )}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Card
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          variant="outlined"
          sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 4 }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Agregar Mascota
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box
              sx={{
                flex: 0.4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
              }}
            >
              <CardMedia
                component="img"
                image="/logo.jpg"
                alt="Mascota"
                sx={{ height: 200, width: 200, borderRadius: '50%', mx: 'auto' }}
              />
              <Button
                variant="contained"
                color="info"
                sx={{
                  width: 'fit-content',
                  mx: 'auto',
                  textTransform: 'inherit',
                  fontWeight: 'bold'
                }}
              >
                Elegir Imagen
              </Button>
            </Box>

            <Box sx={{ width: '100%', flex: 1 }}>
              <Grid container spacing={2} sx={{ width: '100%', mb: 2 }}>
                <FormInput
                  noMb
                  width={4}
                  control={control}
                  name="nombre"
                  labelText="Nombre"
                  placeholderText="Firulais"
                  errorName={errors.nombre}
                  errorText={errors.nombre?.message}
                />

                <FormSelect
                  raza
                  width={4}
                  control={control}
                  name="codigoRaza"
                  dataArray={razas}
                  labelText="Raza"
                  errorName={errors.codigoRaza}
                  errorText={errors.codigoRaza?.message}
                />
                <FormSelect
                  size
                  width={4}
                  control={control}
                  name="codigoTamanio"
                  dataArray={sizes}
                  labelText="Tamaño"
                  errorName={errors.codigoTamanio}
                  errorText={errors.codigoTamanio?.message}
                />
              </Grid>

              <Grid container sx={{ gap: 2, mb: 2 }}>
                <Card variant="outlined" sx={{ flex: 1, p: 1 }}>
                  <FormInput
                    noMb
                    numeric
                    width={12}
                    maxLength={2}
                    control={control}
                    name="edadRegistro"
                    labelText="Edad Aprox."
                    placeholderText="3 años"
                    errorName={errors.edadRegistro}
                    errorText={errors.edadRegistro?.message}
                  />
                  <FormRadio
                    control={control}
                    name="isYear"
                    labelText=""
                    errorName={errors.isYear}
                    errorText={errors.isYear?.message}
                    width={12}
                    dataArray={[
                      { id: 1, descripcion: 'Años', valor: true },
                      { id: 2, descripcion: 'Meses', valor: false }
                    ]}
                  />
                </Card>

                <Card variant="outlined" sx={{ flex: 1, p: 1 }}>
                  <FormDatePicker
                    control={control}
                    name={'fechaNacimiento'}
                    labelText={'Fecha Adopción'}
                    errorName={errors.fechaNacimiento}
                    errorText={errors.fechaNacimiento?.message}
                    width={12}
                  />
                  <FormRadio
                    control={control}
                    name="isFechaNacimiento"
                    labelText=""
                    errorName={errors.isFechaNacimiento}
                    errorText={errors.isFechaNacimiento?.message}
                    width={12}
                    dataArray={[
                      { id: 1, descripcion: 'Nacimiento', valor: true },
                      { id: 2, descripcion: 'Adopción', valor: false }
                    ]}
                  />
                </Card>
              </Grid>

              <Grid container spacing={2} mb={4}>
                <FormSelect
                  sexo
                  width={6}
                  control={control}
                  name="codigoSexo"
                  dataArray={sexo}
                  labelText="Sexo"
                  errorName={errors.codigoSexo}
                  errorText={errors.codigoSexo?.message}
                />
                <FormRadio
                  control={control}
                  name="esterilizado"
                  labelText="Esterilizado"
                  errorName={errors.esterilizado}
                  errorText={errors.esterilizado?.message}
                  width={6}
                  dataArray={[
                    { id: 1, descripcion: 'Si', valor: true },
                    { id: 2, descripcion: 'No', valor: false }
                  ]}
                />
              </Grid>
              <Grid container mb={10}>
                <FormInput
                  noMb
                  variant="outlined"
                  width={12}
                  rows={4}
                  multiline
                  control={control}
                  maxLength={500}
                  name="descripcion"
                  labelText="Cuentanos más sobre tu mascota"
                  placeholderText="Descripción de la mascota"
                  errorName={errors.descripcion}
                  errorText={errors.descripcion?.message}
                />
              </Grid>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Button
                  disabled={loading}
                  variant="contained"
                  color="secondary"
                  sx={{ fontWeight: 'bold', textTransform: 'inherit', flex: 1 }}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  disabled={!editMode}
                  variant="contained"
                  color="warning"
                  sx={{ fontWeight: 'bold', textTransform: 'inherit', flex: 1 }}
                >
                  Editar
                </Button>
                <Button
                  disabled={loading}
                  variant="contained"
                  color="info"
                  type="submit"
                  sx={{ fontWeight: 'bold', textTransform: 'inherit', flex: 1 }}
                >
                  {loading ? <BeatLoader size={10} /> : 'Guardar'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Dialog>
  );
};

export default ModalCreacionMascota;
