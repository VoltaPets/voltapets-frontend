// Librerías
import { useState, useEffect } from 'react';

// MUI
import { Grid } from '@mui/material';

// Relative imports
import Layout from '../../src/components/commons/Layout';
import DisplayMascotasProfile from '../../src/components/screens/private/tutor/mascotas/DisplayMascotasProfile';

function misMascotas() {
  return (
    <Layout
      title="Tutor - Mis Mascotas"
      description="Página de las mascotas de un tutor"
      tutorRequired
      nextPage={'tutor/mis-mascotas'}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4
          }}
        >
          <DisplayMascotasProfile />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default misMascotas;
