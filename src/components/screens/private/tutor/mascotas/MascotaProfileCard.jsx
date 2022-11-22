// Librería
import { useState, useEffect } from 'react';

// MUI
import { Box, Card, Typography, CardMedia } from '@mui/material';

const MascotaProfileCard = ({ mascota, selected = false, onSelected }) => {
  const mascotaID = mascota?.id;
  const mascotaNombre = mascota?.nombre;
  const mascotaImg = mascota?.imagen.url + mascota?.imagen.path;
  const mascotaEstado = mascota?.estadoMascota.descripcion;
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: selected ? 'warning.main' : 'divider',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        p: 1,
        width: '100%',
        height: 80,
        '&:hover': { cursor: 'pointer' },
        borderRadius: 4
      }}
      onClick={() => onSelected(mascotaID)}
    >
      <Box sx={{ flex: 0.3, height: '100%' }}>
        <CardMedia
          component="img"
          image={mascotaImg}
          alt={mascotaNombre}
          sx={{ width: '100%', height: '100%', borderRadius: 2, objectFit: 'cover' }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: 'justify',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
          {mascotaNombre}
        </Typography>
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          {mascotaEstado}
        </Typography>
      </Box>
    </Card>
  );
};

export default MascotaProfileCard;
