// Librerías
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// MUI
import { Card, Box, CardMedia, Typography } from '@mui/material';

const MascotaCard = ({ mascota }) => {
  // Variables
  const mascotaImg = mascota.imagen?.url + mascota.imagen?.path;
  const mascotaSexo = mascota.sexo?.descripcion;

  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleMascotaClick = () => {
    push(`/tutor/mis-mascotas?id=${mascota.id}`);
  };

  return (
    <Card
      onClick={handleMascotaClick}
      sx={{
        width: 300,
        borderRadius: 2,
        filter: 'grayscale(100%)',
        transition: 'all 0.3s ease',
        '&:hover': { cursor: 'pointer', filter: 'grayscale(0%)' }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          alt={`Imagen de ${mascota.nombre}`}
          component="img"
          image={mascotaImg}
          sx={{ height: 300, objectFit: 'cover', borderRadius: 2 }}
          onError={(e) => {
            e.currentTarget.src = '/logo.jpg';
            e.currentTarget.onerror = null;
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            px: 1,
            py: 1.5,
            bgcolor: 'rgba(0,0,0, 0.6)',
            width: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'space-around',
              color: 'white'
            }}
          >
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              {mascota.nombre}
            </Typography>
            •
            <Typography variant="body2" color="white" sx={{ fontWeight: 'bold' }}>
              {mascota.edadRegistro} años
            </Typography>
            •
            <Typography variant="body2" color="white" sx={{ fontWeight: 'bold' }}>
              {mascotaSexo}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default MascotaCard;
