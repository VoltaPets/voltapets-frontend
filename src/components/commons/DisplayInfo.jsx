// Librerías
import React from 'react';

// MUI
import { Box, Typography, Skeleton } from '@mui/material';


const DisplayInfo = ({ titulo, contenido, loading }) => {
  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Typography variant="body2" sx={{ textAlign: 'justify', fontWeight: 'bold', flex: 0.3 }}>
        {titulo}:
      </Typography>
      {loading ? (
        <Skeleton sx={{ width: '30%', flex: 1 }} />
      ) : (
        <Typography variant="body2" sx={{ textAlign: 'justify', flex: 1 }}>
          {contenido ? contenido : 'No especificado'}
        </Typography>
      )}
    </Box>
  );
};

export default DisplayInfo;
