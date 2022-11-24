// Librerías
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { BeatLoader } from 'react-spinners';

// MUI
import { Box, Card, Typography, Button } from '@mui/material';

// Relative Imports
import RecordatorioCard from './RecordatoriosCard';
import ModalEdicionRecordatorios from './ModalEdicionRecordatorios';
import { GET_RECORDATORIOS } from '../../../../../../../api/endpoints/Mascota';
import { request } from '../../../../../../../api/';

const DisplayRecordatorios = ({ id }) => {
  // Estados
  const [openEdicion, setOpenEdicion] = useState(false);
  const [recordatoriosList, setRecordatoriosList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Notificaciones
  const { enqueueSnackbar } = useSnackbar();

  // Handlers
  const handleOpenEdicion = (id) => {
    getRecordatorios(id);
    setOpenEdicion(true);
  };

  const handleCloseEdicion = () => {
    getRecordatorios(id);
    setOpenEdicion(false);
  };

  // Funciones
  const getRecordatorios = async (id) => {
    if (id) {
      setLoading(true);
      try {
        const { data } = await request({
          method: 'GET',
          url: GET_RECORDATORIOS(id)
        });
        setRecordatoriosList(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  // Effects
  useEffect(() => {
    getRecordatorios(id);
  }, [id]);

  return (
    <>
      <ModalEdicionRecordatorios
        open={openEdicion}
        onClose={handleCloseEdicion}
        codigoMascota={id}
        recordatorios={recordatoriosList}
      />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
            Recordatorios
          </Typography>
          <Button
            variant="contained"
            color="info"
            sx={{ fontWeight: 'bold', textTransform: 'inherit' }}
            onClick={handleOpenEdicion}
          >
            Administrar
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Card
            variant="outlined"
            sx={{
              p: 2,
              bgcolor: 'rgba(0,0,0,0.1)',
              minHeight: 280,
              maxHeight: 280,
              overflowY: 'scroll'
            }}
          >
            {loading ? (
              <BeatLoader loading={loading} size={10} style={{ margin: 'auto' }} />
            ) : recordatoriosList.length > 0 ? (
              recordatoriosList.map((recordatorio) => (
                <RecordatorioCard key={recordatorio.id} recordatorio={recordatorio} />
              ))
            ) : (
              <Typography variant="body1" sx={{ textAlign: 'center', my: 'auto' }}>
                Todavía no has creado ningún <br />
                <strong>recordatorio</strong>.
              </Typography>
            )}
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default DisplayRecordatorios;
