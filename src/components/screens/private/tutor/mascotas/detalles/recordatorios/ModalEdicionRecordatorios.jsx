// Librerías
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';

// MUI
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Card,
  Grid,
  IconButton,
  Button,
  Typography
} from '@mui/material';

// Relative imports
import { GET_RECORDATORIOS } from '../../../../../../../api/endpoints/Mascota';
import { CREATE_RECORDATORIO } from '../../../../../../../api/endpoints/Mascota';
import { request } from '../../../../../../../api';
import FormInput from '../../../../../../commons/FormInput';
import { recordatoriosSchema } from './recordatoriosSchema';

const defaultValues = {
  codigoMascota: 0,
  titulo: '',
  descripcion: ''
};

const ModalEdicionRecordatorios = ({ recordatorios, open, onClose, codigoMascota }) => {
  // Estados
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  // Hooks
  const { enqueueuSnackbar } = useSnackbar();
  const {
    register,
    control,
    watch,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues,
    resolver: yupResolver(recordatoriosSchema)
  });

  // Funciones
  const handleClose = (id) => {
    onClose(id);
    reset();
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmit = async (recordatoriosData) => {
    recordatoriosData.codigoMascota = codigoMascota;
    setLoading(true);
    try {
      const { data } = await request({
        url: CREATE_RECORDATORIO,
        method: 'POST',
        data: recordatoriosData
      });
      setLoading(false);
      enqueueuSnackbar(data.mensaje, { variant: 'success' });
      onClose(codigoMascota);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { data: recordatorioErr } = error.response;
        recordatorioErr && enqueueuSnackbar(recordatorioErr.mensaje, { variant: 'error' });
      }
    }
  };

  useEffect(() => {
    if (recordatorios) {
      setLoading(false);
    }
  }, [recordatorios, codigoMascota]);

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      {/* Titulo */}
      <DialogTitle sx={{ display: 'flex' }}>
        <Box sx={{ width: 'fit-content' }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
            onClick={handleClose}
          >
            Cerrar
          </Button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
            Recordatorios
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        {/* Display de recordatorios y su administración */}
        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
          {/* Información */}
          <Box mb={2}>
            <Typography variant="body2" align="justify">
              En esta sección podrás administrar y crear recordatorios relacionados con la mascota
              seleccionada. Los recordatorios te ayudarán a no olvidar las fechas importantes o
              eventos relacionados con tu mascota como vacunas, cumpleaños, etc.
            </Typography>
          </Box>

          {/* Lista */}
          <Box sx={{ flex: 1 }}>
            <Card
              variant="outlined"
              sx={{
                p: 2,
                maxHeight: 150,
                bgcolor: 'rgba(0,0,0,0.1)',
                overflowY: 'scroll'
              }}
            >
              {loading ? (
                <BeatLoader size={10} style={{ margin: 'auto' }} />
              ) : recordatorios.length === 0 ? (
                <Typography variant="body2" align="center">
                  No tienes recordatorios creados para esta mascota aún.
                </Typography>
              ) : (
                recordatorios.map((recordatorio) => (
                  <Card
                    key={recordatorio.id}
                    variant="outlined"
                    sx={{ p: 1, mb: 1, display: 'flex' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        {recordatorio.titulo}
                      </Typography>
                    </Box>

                    <Box sx={{ width: 'fit-content' }}>
                      <IconButton sx={{ gap: 1 }} color="info" onClick={handleEditMode}>
                        <SettingsIcon />
                        <Typography variant="caption">Editar</Typography>
                      </IconButton>

                      <IconButton sx={{ gap: 1 }} color="secondary">
                        <DeleteIcon />
                        <Typography variant="caption">Eliminar</Typography>
                      </IconButton>
                    </Box>
                  </Card>
                ))
              )}
            </Card>
          </Box>
        </Box>

        {/* Formulario de creación */}
        <Box>
          <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
            Crear recordatorio
          </Typography>
          <Grid container component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name="titulo"
              labelText="Título"
              placeholderText="Recordatorio de veterinaria"
              errorName={errors.titulo}
              errorText={errors.titulo?.message}
              variant="outlined"
            />
            <FormInput
              rows={6}
              multiline
              maxLength={500}
              control={control}
              name="descripcion"
              labelText="Descripcion"
              placeholderText="Escribe una descripción para el recordatorio..."
              errorName={errors.descripcion}
              errorText={errors.descripcion?.message}
              variant="outlined"
            />
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 14 }}>
              <Button
                loading={loading}
                fullWidth
                type="submit"
                variant="contained"
                color="info"
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              >
                {loading ? <BeatLoader size={10} /> : 'Crear recordatorio'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEdicionRecordatorios;
