// Librería
import React from 'react';

// MUI
import { Typography, Box, Button, Grid, Card } from '@mui/material';

// Relative imports
import CompromisoCard from './CompromisoCard';

const DisplayCompromisos = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }} mb={2}>
        Compromisos
      </Typography>
      <Typography variant="body1" align="justify" mb={4}>
        En esta sección podrás ver los compromisos que has hecho con tu mascota, tales como el día
        de la próxima cita, el día de la próxima vacuna, etc.
      </Typography>

      <Grid container mb={4}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }} mb={2}>
            Próxima Vacuna
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{ p: 2, bgcolor: 'rgba(0,0,0, 0.1)', height: 150, overflowY: 'scroll' }}
          >
            <CompromisoCard titulo="Vacuna 1" fecha="02/05/2021" />
            <CompromisoCard titulo="Vacuna 2" fecha="20/07/2021" />
            <CompromisoCard titulo="Vacuna 3" fecha="11/12/2021" />
          </Card>
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }} mb={2}>
            Compromisos
          </Typography>
          <Button
            variant="contained"
            color="info"
            sx={{ fontWeight: 'bold', textTransform: 'inherit' }}
          >
            Agregar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{ p: 2, bgcolor: 'rgba(0,0,0, 0.1)', height: 200, overflowY: 'scroll' }}
          >
            <CompromisoCard titulo="Vacuna 1" fecha="02/05/2021" />
            <CompromisoCard titulo="Vacuna 1" fecha="02/05/2021" />
            <CompromisoCard titulo="Vacuna 1" fecha="02/05/2021" />
            <CompromisoCard titulo="Vacuna 1" fecha="02/05/2021" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DisplayCompromisos;
