// Librerías
import { useState, useEffect } from 'react';

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

  // Funciones
  const getMisMascotas = async () => {
    try {
      const { data } = await request({
        url: GET_MASCOTAS,
        method: 'GET'
      });
      setMisMascotas(data);
    } catch (error) {
      if (error.isAxiosError) {
        const { data: mascotasError } = error.response;
        mascotasError && enqueueSnackbar(mascotasError.message, { variant: 'error' });
      }
    }
  };

  // Efectos
  useEffect(() => {
    getMisMascotas();
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
      <Box sx={{ p: 2, flex: 0.8 }}>
        <ItemContainer mascota mascotasArray={misMascotas}/>
        <Divider sx={{ my: 4 }} />
        <ItemContainer anunciosArray={[]}/>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ p: 2, flex: 1 }}>
        <DisplayPaseos />
      </Box>
    </Box>
  );
};

export default DisplayDashboard;
