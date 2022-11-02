import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

// Relative Imports
import Layout from '../../src/components/commons/Layout';
import MascotaCard from '../../src/components/screens/private/tutor/MascotaCard';
import BusquedaMascota from '../../src/components/screens/private/tutor/BusquedaMascota';

const mascotasTutor = [
  {
    id: 1,
    nombre: 'Firulais',
    raza: 'Pastor Aleman',
    edad: '2 años',
    sexo: 'Macho',
    foto: 'https://bestforpets.cl/tienda/img/cms/Blog/RAZAS/Pastor-aleman1.jpg'
  },
  {
    id: 2,
    nombre: 'Luna',
    raza: 'Pastor Aleman',
    edad: '1 año',
    sexo: 'Hembra',
    foto: 'https://www.publimetro.cl/resizer/zPavlS9VGbupdf6V5psc6Jm17pE=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/FSVO2OKVDFCA5AFMIIKRUNT4UE.jpg'
  },
  {
    id: 3,
    nombre: 'Nube',
    raza: 'Samoyedo',
    edad: '2 años',
    sexo: 'Macho',
    foto: 'https://www.nombresdeperros.eu/wp-content/uploads/2020/04/macho-de-samoyedo-en-el-jardin.jpg'
  }
];

function tutorHome() {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Mis Mascotas
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              gap: 4
            }}
          >
            {mascotasTutor.map((mascota) => (
              <MascotaCard key={mascota.id} mascota={mascota} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <BusquedaMascota />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default tutorHome;
