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
  const [codMascota, setCodMascota] = useState(0);
  const [openEdicion, setOpenEdicion] = useState(false);
  const [recordatorios, setRecordatorios] = useState([]);
  const [loading, setLoading] = useState(false);

  // Notificaciones
  const { enqueueSnackbar } = useSnackbar();

  // Handlers
  const handleOpenEdicion = () => {
    setOpenEdicion(true);
  };

  const handleCloseEdicion = () => {
    setOpenEdicion(false);
  };

  // Funciones
  const getRecordatorios = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: GET_RECORDATORIOS(id),
        method: 'GET'
      });
      setRecordatorios(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    getRecordatorios();
    setCodMascota(id);
  }, []);

  return (
    <>
      <ModalEdicionRecordatorios
        open={openEdicion}
        onClose={handleCloseEdicion}
        recordatorios={recordatorios}
        codigoMascota={id}
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
              flex: 1,
              bgcolor: 'rgba(0,0,0,0.1)',
              maxHeight: 280,
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center'
            }}
          >
            {loading ? (
              <BeatLoader loading={loading} size={10} style={{ margin: 'auto' }} />
            ) : recordatorios.length > 0 ? (
              recordatorios.map((recordatorio) => (
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
