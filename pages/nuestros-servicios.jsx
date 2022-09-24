import React from 'react';

// MUI
import { Grid, Box, Typography, Button, CardMedia } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import ServiciosContainer from '../src/components/screens/public/home/nuestros-servicios/ServiciosContainer';
import ServiciosInformacion from '../src/components/screens/public/home/nuestros-servicios/ServiciosInformacion';
import ServiciosBeneficios from '../src/components/screens/public/home/nuestros-servicios/ServiciosBeneficios';

const beneficios = [
  {
    id: 1,
    title: 'Paseos',
    description: 'Paseos para que tu perro se ejercite y se divierta.',
    img: '/images/dog-walk-bg.jpg'
  },
  {
    id: 2,
    title: 'Bienestar Integral',
    description: 'Tiempo de juego y socialización con otros perros.',
    img: '/images/dog-walk-bg2.jpg'
  },
  {
    id: 3,
    title: 'Perfil de mascota',
    description: 'Toda la información de tu mascota en un solo lugar.',
    img: '/images/dog-walk-couple.jpg'
  },
  {
    id: 4,
    title: 'Recordatorios',
    description: 'Recordatorios de paseos, vacunas y citas veterinarias. ',
    img: '/images/dog-walk-bg.jpg'
  }
];

function nuestrosServicios() {
  return (
    <Layout
      title="Nuestros servicios - Volta Pets"
      description="En Volta Pets ofrecemos servicios de paseo, hospedaje y cuidado de mascotas. Conoce más sobre nuestros servicios."
      authRequired={false}
    >
      <Grid container>
        <Grid item xs={12}>
          {/* Hero image */}
          <Box sx={{ position: 'relative', height: { xs: 400, md: 600, lg: 700 } }}>
            <CardMedia
              component="img"
              image="/images/dogs-playing.jpg"
              alt="Perros jugangdo"
              loading="lazy"
              sx={{
                height: '100%',
                objectFit: { xs: 'cover', md: 'cover' }
              }}
            />
            {/* Text */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '100%', md: 600, lg: 700 },
                width: { xs: '100%', md: '50%', lg: '40%' },
                position: 'absolute',
                bottom: 0,
                left: 0,
                p: 4,
                bgcolor: { xs: 'rgba(0, 0, 0, 0.5)', md: 'rgba(0, 0, 0, 0.8)' }
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontSize: { xs: '1.5em', md: '3em' },
                  color: '#fff',
                  pb: 4
                }}
              >
                Nuestros servicios
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  width: { fontSize: { xs: '0.6em', md: '1em' }, xs: '90%', md: '80%' },
                  color: '#fff'
                }}
              >
                En Volta Pets ofrecemos servicios de paseo. Conoce más sobre nuestros servicios.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ServiciosContainer />
        </Grid>
        <Grid item xs={12}>
          <ServiciosInformacion img="/images/dog-owner.jpg" />
        </Grid>
        <Grid item xs={12}>
          <ServiciosInformacion paseador img="/images/dog-walk2.jpg" />
        </Grid>
        <Grid item xs={12}>
          <ServiciosBeneficios beneficios={beneficios} />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default nuestrosServicios;
