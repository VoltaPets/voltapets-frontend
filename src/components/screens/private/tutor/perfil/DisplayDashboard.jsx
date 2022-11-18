// Librerías
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

// MUI
import { Box, Typography, Divider } from '@mui/material';

// Relative imports
import ItemContainer from './ItemContainer';
import DisplayPaseos from './DisplayPaseos';
import { GET_MASCOTAS } from '../../../../../api/endpoints/Mascota';
import { request } from '../../../../../api';

const DisplayDashboard = () => {
  // Estados
  const [misMascotas, setMisMascotas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hooks
  const { enqueueSnackbar } = useSnackbar();

  // Funciones
  const getMisMascotas = async () => {
    try {
      const { data } = await request({
        url: GET_MASCOTAS,
        method: 'GET'
      });
      setMisMascotas(data);
      console.log(misMascotas)
    } catch (error) {
      console.log("error", error);
    }
  };

  // Efectos
  useEffect(() => {
    getMisMascotas();
  }, []);

  useEffect(() => {
    if (misMascotas.length > 0) {
      return setLoading(false);
    }
  }, [misMascotas]);

  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
      <Box sx={{ p: 2, flex: 0.8 }}>
        <ItemContainer loading={loading} mascota mascotasArray={misMascotas}/>
        <Divider sx={{ my: 4 }} />
        <ItemContainer loading={loading} anunciosArray={[]}/>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ p: 2, flex: 1 }}>
        <DisplayPaseos />
      </Box>
    </Box>
  );
};

export default DisplayDashboard;
