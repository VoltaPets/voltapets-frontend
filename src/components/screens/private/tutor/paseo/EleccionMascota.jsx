// Librarías
import { useState } from 'react';

// MUI
import { Card, CardMedia, Box, Typography, Checkbox } from '@mui/material';

const EleccionMascota = ({ petImg, nombre, fn, length }) => {
  // Estados
  const [checked, setChecked] = useState(false);

  // Funciones
  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <Card variant="outlined" sx={{ flex: 1, height: 250, position: 'relative', borderRadius: 4 }}>
      <CardMedia
        component="img"
        image={petImg}
        sx={{
          width: '100%',
          height: 250,
          objectFit: 'cover',
          filter: checked ? 'grayscale(0%)' : 'grayscale(100%)',
          transition: 'all 0.3s ease-in-out'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          gap: 2,
          left: 0,
          right: 0,
          bgcolor: 'rgba(0, 0, 0, 0.52)'
        }}
      >
        <Typography variant="h6" sx={{ textAlign: 'justify', fontWeight: 'bold' }}>
          {nombre}
        </Typography>
        <Checkbox
          disabled={length === 2 && !checked ? true : false}
          value={nombre}
          onClick={handleCheck}
          onChange={fn}
          sx={{ color: 'white' }}
        />
      </Box>
    </Card>
  );
};

export default EleccionMascota;
