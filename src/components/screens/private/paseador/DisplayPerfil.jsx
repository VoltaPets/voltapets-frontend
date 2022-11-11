import React from 'react';

// MUI
import { Card, Button, Box, CardMedia, Typography, Rating } from '@mui/material';

// Relative Imporst
import DisplayInfo from './perfil/DisplayInfo';

const DisplayPerfil = ({
  nombre,
  apellido,
  descripcion,
  telefono,
  email,
  imagen,
  direccion,
  departamento,
  codigoComuna,
  comuna,
  codigoRegion,
  region,
  experiencia,
  calificacion
}) => {

  const fullName = `${nombre} ${apellido}`;
  const fullAddress = `${direccion}, Depto. ${departamento}`;

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        width: '90%'
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
        Mi Perfil
      </Typography>
      <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
        <Card
          variant="outlined"
          sx={{
            p: 4,
            flex: 0.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 4
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
            {/* Foto */}
            <CardMedia
              component="img"
              image="/logo.jpg"
              alt="Logo Volta Pets"
              sx={{ width: 220, height: 220, borderRadius: 8, mb: 2 }}
            />
            <Button
              variant="contained"
              color="info"
              size="small"
              sx={{
                fontWeight: 'bold',
                textTransform: 'inherit',
                borderRadius: 8,
                width: 'fit-content',
                mx: 'auto'
              }}
            >
              Cambiar imagen
            </Button>
          </Box>

          {/* Nombre y descripcion */}
          <Box mt={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Typography
              variant="h5"
              sx={{ textAlign: 'center', fontWeight: 'bold', mt: 2 }}
              gutterBottom
            >
              Nombre
            </Typography>
            <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
              <Typography variant="body2" sx={{ textAlign: 'justify', fontWeight: 'bold' }}>
                Descripcion
              </Typography>
            </Card>
          </Box>
        </Card>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Card variant="outlined" sx={{ p: 2, borderRadius: 4 }}>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
              Información Personal
            </Typography>
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
                Domicilio
              </Typography>
              <DisplayInfo titulo="Calle" contenido="av. Perez Rosales 1233" />
              <DisplayInfo titulo="Comuna" contenido="Santiago Centro" />
              <DisplayInfo titulo="Region" contenido="Región Metropolitana de Santiago" />
            </Box>
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
                Contacto
              </Typography>
              <DisplayInfo titulo="Email" contenido="prueba@mail.cl" />
              <DisplayInfo titulo="Teléfono" contenido="+569 8123 2423" />
            </Box>
          </Card>

          <Box>
            <Card variant="outlined" sx={{ p: 2, flex: 1, borderRadius: 4 }}>
              <Typography
                variant="h5"
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
                gutterBottom
              >
                Evaluación
              </Typography>
              <DisplayInfo titulo="Experiencia" contenido="Experimentado" />
              <Rating name="read-only" value={4} readOnly size="large" sx={{ mt: 2 }} />
            </Card>
          </Box>
          <Button
            variant="contained"
            sx={{ fontWeight: 'bold', textTransform: 'inherit', color: '#fff' }}
          >
            Editar Perfil
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayPerfil;
