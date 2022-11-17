// Librería
import { useState, useEffect } from 'react';

// MUI
import { Box, Card, Typography, CardMedia } from '@mui/material';

const MascotaProfileCard = ({
  nombre = 'Nombre mascota',
  estado = 'Deshabilitado',
  img = '/images/paw.png',
  onSelected
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 1,
        width: '100%',
        '&:hover': { cursor: 'pointer' }
      }}
      onClick={onSelected}
    >
      <CardMedia
        component="img"
        image={img}
        alt={nombre}
        sx={{ width: 65, maxHeight: 65, flex: 0.5 }}
      />
      <Box
        sx={{
          flex: 1,
          textAlign: 'justify',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          {nombre}
        </Typography>
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          {estado}
        </Typography>
      </Box>
    </Card>
  );
};

export default MascotaProfileCard;
