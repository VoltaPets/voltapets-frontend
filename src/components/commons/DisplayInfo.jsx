// Librerías
import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Typography } from '@mui/material';

const DisplayInfo = ({ titulo, contenido, loading }) => {
  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Typography variant="body2" sx={{ textAlign: 'justify', fontWeight: 'bold', flex: 0.4 }}>
        {titulo}:
      </Typography>
      {loading ? (
        <BeatLoader size={10} />
      ) : (
        <Typography variant="body2" sx={{ textAlign: 'justify', flex: 1 }}>
          {contenido ? contenido : 'No especificado'}
        </Typography>
      )}
    </Box>
  );
};

export default DisplayInfo;
