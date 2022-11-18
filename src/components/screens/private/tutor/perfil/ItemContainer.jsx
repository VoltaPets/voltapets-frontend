// Librerías
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Card, Button, Typography } from '@mui/material';

// Relative Imports
import MascotaDashboard from '../mascotas/MascotaDashboard';

const ItemContainer = ({
  loading = false,
  mascota = false,
  mascotasArray = [],
  anunciosArray = []
}) => {
  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleMisMascotas = () => {
    push('/tutor/mis-mascotas');
  };

  const handleMisAnuncios = () => {
    push('/tutor/anuncios');
  };

  console.log(mascotasArray);

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
        sx={{ p: 2, mt: 2, bgcolor: 'rgba(0,0,0, 0.1)', minHeight: 200, maxHeight: 200, overflowY: 'scroll' }}
      >
        {loading ? (
          <BeatLoader size={10} />
        ) : mascota ? (
          mascotasArray.length === 0 ? (
            <Typography variant="body2">No tienes mascotas registradas</Typography>
          ) : (
            mascotasArray.map((mascota) => <MascotaDashboard key={mascota.id} {...mascota} />)
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
