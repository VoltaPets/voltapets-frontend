// Librerias
import React from 'react';

//MUI
import { Typography, Box, Grid } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import Filtros from '../src/components/screens/public/home/adopcion/Filtros';

function AdopcionMascotasPage() {
  return (
    <Layout authRequired={false} publicPage title="Adopción de mascotas">
      <Box component="header" sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4">Adopción de mascotas</Typography>
      </Box>

      <Grid container sx={{ border: 2, borderColor: 'green' }}>
        {/* Filtro */}
        <Grid item xs={12} md={3.5} component="aside" p={2}>
          <Box component="header" sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5">Filtros de búsqueda</Typography>
          </Box>
          <Box sx={{ border: 1, borderRadius: 2, p: 4 }}>
            <Filtros />
          </Box>
        </Grid>

        {/* Cartas */}
        <Grid
          item
          xs={12}
          md
          sx={{
            border: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          component="section"
        >
          A
        </Grid>
      </Grid>
    </Layout>
  );
}

export default AdopcionMascotasPage;
