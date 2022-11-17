// Librerías
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI
import { Box, Card, Button, Typography } from '@mui/material';

const ItemContainer = ({ mascota = false, mascotasArray = [], anunciosArray = [] }) => {
  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleMisMascotas = () => {
    push('/tutor/mis-mascotas');
  };

  const handleMisAnuncios = () => {
    push('/tutor/anuncios');
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {mascota ? 'Mis Mascotas' : 'Mis Anuncios'}
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="info"
          sx={{ fontWeight: 'bold', textTransform: 'inherit' }}
          onClick={mascota ? handleMisMascotas : handleMisAnuncios}
        >
          {mascota ? 'Ir a Mis Mascotas' : 'Administrar'}
        </Button>
      </Box>
      <Card
        variant="outlined"
        sx={{ p: 2, mt: 2, bgcolor: 'rgba(0,0,0, 0.1)', minHeight: 150, overflowY: 'scroll' }}
      >
        {mascota ? (
          mascotasArray.length === 0 ? (
            <Typography variant="body2">No tienes mascotas registradas</Typography>
          ) : (
            <div>A</div>
          )
        ) : anunciosArray.length === 0 ? (
          <Typography variant="body2">No tienes anuncios registrados</Typography>
        ) : (
          <div>B</div>
        )}
      </Card>
    </Box>
  );
};

export default ItemContainer;
