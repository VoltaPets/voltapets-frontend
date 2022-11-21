// Librerías
import { useState, useEffect } from 'react';

// MUI
import { Grid, Typography, Card } from '@mui/material';

// Relative imports
import DisplayVacunas from './detalles/vacunas/DisplayVacunas';
import DisplayComportamiento from './detalles/comportamiento/DisplayComportamiento';
import DisplayHistorial from './detalles/historial/DisplayHistorial';
import DisplayRecordatorios from './detalles/recordatorios/DisplayRecordatorios';
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

  // Effects
  useEffect(() => {
    if (!selectedMascota) {
      return;
    }
    getVacunas(selectedMascota.id);
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
          <DisplayComportamiento nombreMascota={selectedMascota?.nombre} />
        </Card>

        {/* Vacunas */}
        <Card variant="outlined" sx={{ width: '100%', p: 2 }}>
          <DisplayVacunas vacunasArray={vacunas} />
        </Card>
      </Grid>

      <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Historial de paseos */}
        <Card variant="outlined" sx={{ width: '100%', p: 2 }}>
          <DisplayHistorial />
        </Card>

        {/* DisplayRecordatorios */}
        <Card
          variant="outlined"
          sx={{ width: '100%', p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <DisplayRecordatorios />
        </Card>
      </Grid>

      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Compromisos */}
        <Card variant="outlined" sx={{ width: '100%', height: '100%', p: 2 }}>
          Compromisos
        </Card>
      </Grid>
    </Grid>
  );
};

export default MascotaDetail;
