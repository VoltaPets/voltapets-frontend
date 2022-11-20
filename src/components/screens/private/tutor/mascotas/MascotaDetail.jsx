// Librerías
import { useState, useEffect } from 'react';

// MUI
import { Grid, Typography, Card } from '@mui/material';

// Relative imports
import Vacunas from './detalles/Vacunas';
import { GET_VACUNAS } from '../../../../../api/endpoints/Vacunas';
import { request } from '../../../../../api';

const MascotaDetail = ({ selectedMascota }) => {
  // Estados
  const [vacunas, setVacunas] = useState([]);

  // Funciones
  const getVacunas = async (id) => {
    try {
      if (id) {
        const { data } = await request({
          url: GET_VACUNAS(id),
          method: 'GET'
        });
        setVacunas(data);
      }
    } catch (error) {
      console.log(error.data);
    }
  };

  // Make sure we have a selectedMascota before rendering anything else (otherwise we'll get an error)
  if (!selectedMascota) {
    return null;
  }

  // Effects
  useEffect(() => {
    if (selectedMascota) {
      getVacunas(selectedMascota.id);
    }
  }, [selectedMascota]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mb={4}>
        <Typography variant="h4" align="center" sx={{ color: '#000' }}>
          Detalles de la mascota
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Comportamiento */}
        <Card variant="outlined" sx={{ width: '100%', p: 2 }}>
          Comportamiento
        </Card>

        {/* Vacunas */}
        <Card variant="outlined" sx={{ width: '100%', p: 2 }}>
          <Vacunas vacunasArray={vacunas} />
        </Card>
      </Grid>

      <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Historial de paseos */}
        <Card variant="outlined" sx={{ width: '100%', p: 2 }}>
          Historial de paseos
        </Card>

        {/* Recordatorios */}
        <Card variant="outlined" sx={{ width: '100%', p: 2 }}>
          Recordatorios
        </Card>
      </Grid>

      <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Compromisos */}
        <Card variant="outlined" sx={{ width: '100%', height: '100%', p: 2 }}>
          Compromisos
        </Card>
      </Grid>
    </Grid>
  );
};

export default MascotaDetail;
