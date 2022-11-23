// Librerías
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BeatLoader from 'react-spinners/BeatLoader';
import { useSnackbar } from 'notistack';

// MUI
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Dialog,
  Grid,
  Card,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import {
  GET_RAZAS,
  GET_SEXO,
  GET_SIZE,
  CREATE_MASCOTA,
  GET_MASCOTAS
} from '../../../../../api/endpoints/Mascota';
import { CLOUDINARY_URL } from '../../../../../constant';

const ModalCreacionMascota = ({ open, onClose }) => {
  // Estados
  const [mascotaSelected, setMascotaSelected] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mascotasList, setMascotasList] = useState([]);
  const [razasList, setRazasList] = useState([]);
  const [sexoList, setSexoList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [petImg, setPetImg] = useState(null);

  //Hooks
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      nombre: '',
      imagen: {
        url: '',
        path: '',
        public_id: ''
      },
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

  // Handlers
  const handleSelected = (mascota) => {
    setMascotaSelected(mascota);
    setEditMode(true);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleImageChange = (e) => {
    let imagenElegida = document.getElementById('imagen-elegida');
    let reader = new FileReader();
    let file = e.target.files[0];
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'mascotas');
    setPetImg(formData);

    reader.readAsDataURL(file);
    reader.onload = () => {
      imagenElegida.src = reader.result;
    };
  };

  // Funciones
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

  const getRazas = async () => {
    try {
      const { data } = await request({
        url: GET_RAZAS,
        method: 'GET'
      });
      setRazasList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSexo = async () => {
    try {
      const { data } = await request({
        url: GET_SEXO,
        method: 'GET'
      });
      setSexoList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSize = async () => {
    try {
      const { data } = await request({
        url: GET_SIZE,
        method: 'GET'
      });
      setSizeList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (mascotaData) => {
    setLoading(true);
    try {
      const { secure_url, public_id } = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: petImg
      }).then((res) => res.json());

      const formatURL = new URL(secure_url);
      const path = formatURL.pathname;
      const url = formatURL.origin;

      const imagen = {
        url,
        path,
        public_id
      };

      mascotaData.imagen = imagen;

      const { data } = await request({
        url: CREATE_MASCOTA,
        method: 'POST',
        data: mascotaData
      });
      setLoading(false);
      enqueueSnackbar('Mascota registrada con éxito', { variant: 'success' });
      getMascotas();
      reset();
      onClose();
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { data: errorRegistro } = error.response;
        errorRegistro && enqueueSnackbar(errorRegistro.mensaje, { variant: 'error' });
      }
      console.log(error);
    }
  };

  useEffect(() => {
    getMascotas();
    getRazas();
    getSize();
    getSexo();
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
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxHeight: 268,
              overflowY: 'scroll',
              mb: 2
            }}
          >
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
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Agregar Mascota
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Card
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          variant="outlined"
          sx={{ p: 2, display: 'flex', flexWrap: 'wrap', gap: 4 }}
        >
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
              <img
                id="imagen-elegida"
                src="/pawBg.png"
                style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: '50%' }}
              />
              <input style={{ width: '80%' }} type="file" onChange={handleImageChange} />
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
                  dataArray={razasList}
                  labelText="Raza"
                  errorName={errors.codigoRaza}
                  errorText={errors.codigoRaza?.message}
                />
                <FormSelect
                  size
                  width={4}
                  control={control}
                  name="codigoTamanio"
                  dataArray={sizeList}
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
                  dataArray={sexoList}
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
                  {loading ? <BeatLoader size={10} /> : 'Registrar Mascota'}
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
