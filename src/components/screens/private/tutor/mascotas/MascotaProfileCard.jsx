// Librería
import { useState, useEffect } from 'react';

// MUI
import { Box, Card, Typography, CardMedia } from '@mui/material';

const MascotaProfileCard = ({
  nombre = 'Nombre mascota',
  estado = 'Deshabilitado',
  img = '/images/paw.png',
  selected = false,
  onSelected
}) => {
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
        '&:hover': { cursor: 'pointer' },
        borderRadius: 4
      }}
      onClick={onSelected}
    >
      <CardMedia
        component="img"
        image={img}
        alt={nombre}
        sx={{ width: 65, height: '100%', flex: 0.5, borderRadius: 2 }}
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
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
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
