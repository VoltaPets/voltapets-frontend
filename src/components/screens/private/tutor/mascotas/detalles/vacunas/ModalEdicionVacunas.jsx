// Librerías
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BeatLoader } from 'react-spinners';
import { useSnackbar } from 'notistack';

// MUI
import { Dialog, Divider, Box, Grid, Typography, Button, Card } from '@mui/material';

// Relative Imports
import FormDatePicker from '../../../../../../commons/FormDatePicker';
import FormularioVacuna from './FormularioVacuna';
import { CLOUDINARY_URL } from '../../../../../../../constant';
import { REGISTRAR_VACUNA } from '../../../../../../../api/endpoints/Vacunas';
import { GET_VACUNAS_PET } from '../../../../../../../api/endpoints/Vacunas';
import { request } from '../../../../../../../api';

const schema = Yup.object().shape({
  fechaVacunacion: Yup.date().nullable().required('La fecha de vacunación es requerida'),
  imagen: Yup.mixed().required('Debes ingresar una imagen')
});

const ModalEdicionVacunas = ({ open, onClose, mascotaID }) => {
  // Estados
  const [vacunaImg, setVacunaImg] = useState(null);
  const [vacunasPetArray, setVacunasPetArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAntiRabica, setIsAntiRabica] = useState(false);

  // Variables
  const idMascota = mascotaID;

  // Hooks
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    reset,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nombreVacuna: 'Antirrábica',
      fechaVacunacion: null,
      obligatoria: true,
      codigoVacuna: 1,
      codigoMascota: idMascota,
      imagen: null
    },
    resolver: yupResolver(schema)
  });

  // Funciones
  const onSubmit = async () => {
    setLoading(true);
    try {
      if (isAntiRabica) {
        const { secure_url, public_id } = await fetch(CLOUDINARY_URL, {
          method: 'POST',
          body: vacunaImg
        }).then((res) => res.json());

        const formatURL = new URL(secure_url);
        const path = formatURL.pathname;
        const url = formatURL.origin;

        const imagen = {
          url,
          path,
          public_id
        };
        vacunasPetArray.find((vacuna) => {
          if (vacuna.codigoVacuna === 1) {
            vacuna.imagen = imagen;
          }
        });
      }

      const { data } = await request({
        method: 'POST',
        url: REGISTRAR_VACUNA,
        data: vacunasPetArray
      });
      setLoading(false);
      setIsAntiRabica(false);
      enqueueSnackbar(data.mensaje, { variant: 'success' });
      setVacunasPetArray([]);
      onClose();
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { data: vacunaError } = error.response;
        vacunaError && enqueueSnackbar(vacunaError.mensaje, { variant: 'error' });
        setVacunasPetArray([]);
      }
    }
  };

  const saveVacuna = (vacunaData) => {
    console.log('Data: ', vacunaData);

    vacunaData.codigoMascota = idMascota;
    vacunasPetArray.push(vacunaData);
    setIsAntiRabica(true);
  };

  console.log(vacunasPetArray);

  const deleteVacuna = (codigoVacuna) => {
    const vacunas = vacunasPetArray.filter((vacuna) => vacuna.codigoVacuna !== codigoVacuna);
    setIsAntiRabica(false);
    setVacunasPetArray(vacunas);
  };

  const handleClose = () => {
    onClose();
    setVacunasPetArray([]);
    getVacunas();
    setLoading(false);
  };

  const handleVacunaImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'vacunas');
    setVacunaImg(formData);
  };

  const getVacunas = async () => {
    if (idMascota) {
      try {
        const { data } = await request({
          method: 'GET',
          url: GET_VACUNAS_PET(idMascota)
        });
        setVacunasActuales(data);
      } catch (error) {
        if (error.isAxiosError) {
          const { data: vacunaError } = error.response;
          vacunaError && enqueueSnackbar(vacunaError.mensaje, { variant: 'error' });
        }
      }
    }
  };

  // UseEffects
  useEffect(() => {
    getVacunas();
  }, [idMascota]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box sx={{ display: 'flex', p: 2 }}>
        <Button
          color="info"
          variant="contained"
          sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
          onClick={handleClose}
        >
          Cerrar
        </Button>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            Vacunas
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" align="justify">
          En este apartado podrás ver las vacunas podrás registrar las vacunas que ha recibido tu
          mascota. Recuerda que es importante que estén al día para evitar enfermedades. Por ley te
          recordamos que la vacuna de la rabia es <strong>obligatoria</strong>.
        </Typography>
      </Box>

      <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
        {/* Vacuna antirrábica */}
        <Card variant="outlined" sx={{ p: 2, flex: 0.8, height: 'fit-content' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Vacuna Antirrábica
          </Typography>
          <Grid
            container
            noValidate
            component="form"
            spacing={2}
            onSubmit={handleSubmit(saveVacuna)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}
          >
            <FormDatePicker
              noMb
              control={control}
              name="fechaVacunacion"
              disabled={loading}
              errorName={errors.fechaVacunacion}
              errorText={errors.fechaVacunacion?.message}
              labelTet="Fecha de vacunación"
              width={12}
            />

            <Grid item xs={12} md={12} mt={2}>
              <input
                type="file"
                {...register('imagen')}
                style={{ width: '100%' }}
                onChange={handleVacunaImage}
              />
              <Typography variant="caption" color="error">
                {errors.imagen?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', gap: 2 }}>
              <Button
                disabled={isAntiRabica}
                variant="outlined"
                type="submit"
                color="info"
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              >
                Guardar
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
                onClick={() => deleteVacuna(mascotaID)}
              >
                Borrar
              </Button>
            </Grid>
            <Divider sx={{ width: '100%', mt: 2 }} />

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Información
              </Typography>
              <Typography variant="subtitle2" align="justify">
                Recuerda que para poder utilizar nuestros servicios debes tener el estado de esta{' '}
                <strong>Vacuna</strong> al día. Un paseador ayudará a confirmar que efectivamente tu
                mascota se encuentra apta para el servicio.
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Otras vacunas */}
          <Card variant="outlined" sx={{ p: 2, flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Otras Vacunas
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormularioVacuna
                vaccSextuple
                titulo="Séxtuple"
                setVacunas={setVacunasPetArray}
                vacunas={vacunasPetArray}
                codigoMascota={mascotaID}
              />
              <FormularioVacuna
                titulo="Óctuple"
                setVacunas={setVacunasPetArray}
                vacunas={vacunasPetArray}
                codigoMascota={mascotaID}
              />
            </Box>
          </Card>
          <Card
            variant="outlined"
            sx={{
              p: 2,
              mt: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography variant="h6" align="justify" sx={{ fontWeight: 'bold' }}>
              Vacunas guardadas: {vacunasPetArray.length}
            </Typography>
            <Button
              variant="outlined"
              color="info"
              sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              onClick={onSubmit}
            >
              {loading ? <BeatLoader size={10} /> : 'Registrar Vacunas'}
            </Button>
          </Card>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModalEdicionVacunas;
