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

const Footer = () => {
  return (
    <Grid container sx={{ bgcolor: 'secondary.main', p: 4 }}>
      {/* Links */}
      <Grid
        item
        xs={12}
        md
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          color: 'white'
        }}
      >
        <Grid container sx={{ alignItems: 'space-between', height: '100%', gap: 2 }}>
          {/* Nuestra empresa */}
          <Grid item xs>
            <Box sx={{ fontWeight: 'bold', pb: 2, borderBottom: 1, borderColor: 'white', mb: 2 }}>
              Nuestra empresa
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 2 }}>
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
          <Grid item xs>
            <Box sx={{ fontWeight: 'bold', pb: 2, borderBottom: 1, borderColor: 'white', mb: 2 }}>
              Información Legal
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 2 }}>
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
          <Grid item xs>
            <Box sx={{ fontWeight: 'bold', pb: 2, borderBottom: 1, borderColor: 'white', mb: 2 }}>
              Soporte
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 2 }}>
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
              display: 'flex',
              alignItems: 'space-between',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            {/* Dirección & Copyright */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center'
              }}
            >
              <Typography variant="caption">{`Copyright © ${new Date().getFullYear()} Volta Pets, SpA.`}</Typography>
              <Typography variant="caption">
                Av. Volta Pets 3400, Torre 1, piso 11, Las Condes, Santiago de Chile
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Contacto */}
      <Grid
        item
        xs={12}
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
            width: '90%',
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
          <Box component="header">
            <Typography variant="h6" sx={{ fontSize: '1em', fontWeight: 'bold' }} gutterBottom>
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
    </Grid>
  );
};

export default Footer;
