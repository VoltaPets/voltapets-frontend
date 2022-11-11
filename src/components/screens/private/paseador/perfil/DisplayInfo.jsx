import React from 'react';

import { Box, Typography } from '@mui/material';

const DisplayInfo = ({ titulo, contenido }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="body2" sx={{ textAlign: 'justify', fontWeight: 'bold', flex: 0.2 }}>
        {titulo}:
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify', flex: 1 }}>
        {contenido}
      </Typography>
    </Box>
  );
};

export default DisplayInfo;
