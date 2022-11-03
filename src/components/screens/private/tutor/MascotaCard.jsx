import React from 'react';

// MUI
import { Card, Box, CardContent, CardMedia, Typography } from '@mui/material';

const MascotaCard = ({ mascota }) => {
  return (
    <Card
      sx={{ width: 300, borderRadius: 2, '&:hover': { cursor: 'pointer' } }}
      onClick={() => alert(`Ir a página de mascota ${mascota.nombre}`)}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={mascota.foto}
          sx={{ height: 300, objectFit: 'cover', borderRadius: 2 }}
          alt="Mascota"
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
              {mascota.edad}
            </Typography>
            •
            <Typography variant="body2" color="white" sx={{ fontWeight: 'bold' }}>
              {mascota.sexo}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default MascotaCard;
