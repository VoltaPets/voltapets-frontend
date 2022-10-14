// Librerias
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//MUI
import TuneIcon from '@mui/icons-material/Tune';
import { Typography, Box, Card, Chip, Grid, Button, TextField } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import BuscadorMascota from '../src/components/screens/public/home/mascotas-perdidas/BuscadorMascotas';
import { perdidas } from '../src/mock/mascotas';
import MascotaPerdidaCard from '../src/components/commons/mascotas/MascotaCard';

function MascotaPerdidaPage() {
  // Hooks
  const { query, isReady, replace } = useRouter();

  return (
    <Layout authRequired={false} publicPage title="Adopción de mascotas">
      <Box sx={{ maxWidth: { xs: '100%', lg: 1300 }, mx: 'auto' }}>
        <Box
          component="header"
          sx={{
            pt: 4,
            pb: 1,
            textAlign: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography variant="h4" color="info.main" gutterBottom>
              Mascotas perdidas
            </Typography>
          </Box>

          <BuscadorMascota />
        </Box>

        <Grid container p={2}>
          {/* Cartas */}
          <Grid
            item
            xs={12}
            md
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'start',
              bgcolor: '#e3e4e5',
              borderRadius: 4,
              mb: 4,
              p: 2,
              gap: 2
            }}
            component="section"
          >
            <Grid container spacing={2}>
              {perdidas.map((mascotaPerdida) => (
                <MascotaPerdidaCard key={mascotaPerdida.id} mascota={mascotaPerdida} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default MascotaPerdidaPage;
