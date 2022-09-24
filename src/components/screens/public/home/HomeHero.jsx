// Libraries
// MUI
import { Box, Button, CardMedia, Typography, styled } from '@mui/material';

// Relative Imports
import Link from '../../../commons/Link';

const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#fff',
  borderRadius: 30,
  transition: '0.4s',
  padding: 15,
  paddingRight: 25,
  paddingLeft: 25,
  textTransform: 'inherit',
  '&:hover': {
    backgroundColor: 'rgba(157, 47, 58, 0.8)'
  }
}));

const HomeHero = () => {
  return (
    <Box sx={{ width: '100%', height: 600, position: 'relative' }}>
      <CardMedia
        component="img"
        alt="Hero Image"
        image="/images/dog-walk-bg2.jpg"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          bgcolor: 'rgba(255,255,255, 0.3)',
          width: '100%',
          height: '100%'
        }}
      >
        <Typography variant="h3" color="secondary" align="center">
          Navega por nuestro sitio
        </Typography>

        <Box sx={{ width: '60%', display: 'flex', justifyContent: 'space-around' }}>
          <HeroButton>Tiendas asociadas</HeroButton>
          <HeroButton>¿Cómo funciona?</HeroButton>
          <HeroButton>Otros servicios</HeroButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
