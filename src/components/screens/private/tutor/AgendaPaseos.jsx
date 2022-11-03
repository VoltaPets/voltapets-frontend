import { useState } from 'react';

// MUI
import { Grid, Box, Chip, Card, Typography } from '@mui/material';

const AgendaPaseos = () => {
  const [fecha, setFecha] = useState(new Date().toLocaleDateString().slice(0, 10));
  const [hora, setHora] = useState(new Date().toTimeString().slice(0, 5));

  console.log('Fecha: ', fecha);
  console.log('Hora: ', hora);

  return (
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
        Agenda la fecha y hora de tu paseo
      </Typography>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {/* Agenda de Reserva */}
        <Grid
          item
          xs={12}
          md={7.5}
          sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', border: 1 }}
        >
          <Card variant="outlined" sx={{ p: 4, borderRadius: 4, flex: 1 }}>
            a
          </Card>
        </Grid>

        {/* Resumen Reserva */}
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', border: 1 }}
        >
          <Card variant="outlined" sx={{ p: 4, borderRadius: 4, flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Resumen Hora Reservada
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ textAlign: 'justify' }} gutterBottom>
                Fecha:
              </Typography>
              <Chip label={fecha} />
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ textAlign: 'justify' }} gutterBottom>
                Hora:
              </Typography>
              <Chip label={hora} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AgendaPaseos;
