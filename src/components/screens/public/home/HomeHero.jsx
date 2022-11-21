// Libraries
// MUI
import { Box, Button, CardMedia, Typography, styled } from '@mui/material';

// Relative Imports
import Link from '../../../commons/Link';

const HomeHero = () => {
  return (
    <Box sx={{ height: 600, display: 'flex' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt="Hero Image 1"
          image="/images/landing1.png"
          sx={{ height: '100%', objectFit: 'cover', flex: 1 }}
        />
        <Typography
          variant="h3"
          sx={{
            textAlign: 'justify',
            fontWeight: 'bold',
            position: 'absolute',
            bottom: '5%',
            right: '0%',
            left: '50%',
            marginLeft: '-25%'
          }}
        >
          Elige al <br />
          cuidador,
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt="Hero Image 2"
          image="/images/landing2.png"
          sx={{ height: '100%', objectFit: 'cover', flex: 1 }}
        />
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            position: 'absolute',
            color: 'warning.main',
            bottom: '5%',
            right: '0%',
            left: '0%'
          }}
        >
          agenda un <br />
          paseo
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt="Hero Image 3"
          image="/images/landing3.png"
          sx={{
            height: '100%',
            objectFit: 'cover',
            flex: 1
          }}
        />
        <Typography
          variant="h3"
          sx={{
            textAlign: 'right',
            fontWeight: 'bold',
            position: 'absolute',
            color: 'secondary.main',
            bottom: '5%',
            right: '50%',
            left: '0%',
            marginRight: '-35%'
          }}
        >
          y dejanos el <br />
          resto.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeHero;
