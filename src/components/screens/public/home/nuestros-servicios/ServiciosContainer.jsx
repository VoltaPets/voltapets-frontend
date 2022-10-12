// Librerias

// MUI
import { List, Home, Pets } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';

// Relative imports
import ServiciosCard from './ServiciosCard';

const servicios = [
  {
    titulo: 'Adopción de mascotas',
    descripcion:
      'Si estás interesado en adoptar una mascota o quieres dar en adopción a una mascota, publica tu anuncio en nuestra plataforma.',
    color: 'info.main',
    features: [
      'Encuentra tu mascota ideal',
      'Puedes publicar tu anuncio de adopción de forma gratuita',
      'Disfruta de la compañía de un nuevo miembro de la familia'
    ]
  },
  {
    titulo: 'Paseo de mascotas',
    descripcion:
      'Si no tienes tiempo para pasear a tu mascota, nosotros te ayudamos. Busca un paseador de mascotas en nuestra plataforma y dale a tu mascota el paseo que necesita.',
    features: [
      'Servicio de Paseo Básico',
      'Paseo de 30 minutos, 45 minutos o 1 hora',
      'Servicio de Bienestar Integral que incluye juego con otras mascotas y socialización con otras mascotas'
    ],
    color: 'secondary.main'
  },
  {
    titulo: 'Mascotas perdidas',
    descripcion:
      'Publica tu mascota perdida en nuestra web y te ayudaremos a encontrarla en conjunto con la comunidad de Volta Pets. ',
    color: 'success.main',
    features: [
      'Ayuda a encontrar a tu mascota',
      'Publica tu mascota perdida de forma gratuita',
      'Ayuda a encontrar a otras mascotas perdidas'
    ]
  }
];

const ServiciosContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 2, md: 4 },
        py: { xs: 4 },
        bgcolor: 'primary.main'
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontSize: { xs: '1.5em', md: '3em' },
          color: '#fff',
          pb: 4
        }}
      >
        Nuestros servicios
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'end',
            p: { xs: 0, md: 4 }
          }}
        >
          {servicios.map((servicio, index) => (
            <ServiciosCard key={index} {...servicio} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiciosContainer;
