// Libraries
import React from 'react';

// MUI
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import { Grid, Box, Card, CardMedia, Typography } from '@mui/material';

// Relative Imports
import Link from '../Link';

const Copyright = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'start' },
        justifyContent: 'center',
        gap: { xs: 1, md: 0 }
      }}
    >
      <Typography
        variant="caption"
        sx={{ textAlign: { xs: 'center', sm: 'left' }, mb: { xs: 2, md: 0 } }}
      >
        Av. Volta Pets 3400, Torre 1, piso 11, Las Condes, Santiago de Chile
      </Typography>
      <Typography variant="caption">{`Copyright © ${new Date().getFullYear()} Volta Pets, SpA.`}</Typography>
    </Box>
  );
};

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: 'secondary.main',
        py: 4,
        px: { xs: 2, md: 4 },
        mx: 'auto'
      }}
    >
      {/* Links */}
      <Grid
        item
        xs={12}
        sm
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          color: 'white',
          mb: { xs: 4, md: 0 }
        }}
      >
        <Grid container sx={{ alignItems: 'space-between', height: '100%', gap: { xs: 1, md: 2 } }}>
          {/* Nuestra empresa */}
          <Grid item xs={12} sm sx={{ mb: { xs: 4, md: 0 } }}>
            <Box
              sx={{
                fontWeight: 'bold',
                pb: 2,
                borderBottom: 1,
                borderColor: 'white',
                mb: 2,
                fontSize: '1em'
              }}
            >
              Nuestra empresa
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
                fontSize: { xs: '0.8em', md: '1em' }
              }}
            >
              <Link href="/" sx={{ color: 'white' }}>
                Volta Pets
              </Link>
              <Link href="/" sx={{ color: 'white' }}>
                Métodos de pago
              </Link>
              <Link href="/" sx={{ color: 'white' }}>
                Paseo de mascotas
              </Link>
            </Box>
          </Grid>

          {/* Información Legal */}
          <Grid item xs={12} sm sx={{ mb: { xs: 4, md: 0 } }}>
            <Box sx={{ fontWeight: 'bold', pb: 2, borderBottom: 1, borderColor: 'white', mb: 2 }}>
              Información Legal
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
                fontSize: { xs: '0.8em', md: '1em' }
              }}
            >
              <Link href="/" sx={{ color: 'white' }}>
                Aviso de Privacidad
              </Link>
              <Link href="/" sx={{ color: 'white' }}>
                Términos de uso
              </Link>
              <Link href="/" sx={{ color: 'white' }}>
                Condiciones
              </Link>
            </Box>
          </Grid>

          {/* Soporte */}
          <Grid item xs={12} sm>
            <Box
              sx={{
                fontWeight: 'bold',
                pb: 2,
                borderBottom: 1,
                borderColor: 'white',
                mb: 2,
                fontSize: { xs: '0.9em', md: '1em' }
              }}
            >
              Soporte
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
                fontSize: { xs: '0.8em', md: '1em' }
              }}
            >
              <Link href="/" sx={{ color: 'white' }}>
                Ayuda
              </Link>
              <Link href="/" sx={{ color: 'white' }}>
                Preguntas frecuentes
              </Link>
            </Box>
          </Grid>

          {/* RR.SS. & Copyright */}
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'space-between',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            <Copyright />
          </Grid>
        </Grid>
      </Grid>

      {/* Contacto */}
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          py: 2,
          color: 'white'
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: { xs: 'fit-content', md: '90%' },
            borderRadius: 2,
            p: 2,
            bgcolor: 'transparent',
            borderColor: 'white',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 2
          }}
        >
          <Box component="header" sx={{ width: '100%' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '1em', fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }}
              gutterBottom
            >
              Contáctanos
            </Typography>
          </Box>

          {/* Telefono */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon />
            <Typography variant="body2" sx={{ fontSize: '0.9em' }}>
              +569 1234 5678
            </Typography>
          </Box>
          {/* Correo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon />
            <Typography variant="body2" sx={{ fontSize: '0.9em' }}>
              contacto@voltapets.cl
            </Typography>
          </Box>

          {/* RR.SS */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              gap: 1,
              mt: 2
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                borderColor: 'primary.main',
                bgcolor: 'white',
                p: 1,
                borderRadius: 8
              }}
            >
              {/* Facebook */}
              <Link href="/">
                <FacebookIcon
                  sx={{
                    fontSize: '1.8em',
                    transition: '0.4s',
                    color: '#4267B2'
                  }}
                />
              </Link>

              {/* Instagram */}
              <Link href="/">
                <InstagramIcon
                  sx={{
                    fontSize: '1.8em',
                    transition: '0.4s',
                    color: '#E1306C'
                  }}
                />
              </Link>

              {/* Twitter */}
              <Link href="/">
                <TwitterIcon
                  sx={{
                    fontSize: '1.8em',
                    transition: '0.4s',
                    color: '#1DA1F2'
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          color: 'white',
          mt: 4
        }}
      >
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Footer;
