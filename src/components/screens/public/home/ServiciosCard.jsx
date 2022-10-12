// Librerías
import React from 'react';

import { Card, CardMedia, Box, Grid, Typography } from '@mui/material';

const ServiciosCard = ({ width = 12, titulo, descripcion, image }) => {
  return (
    <Grid item xs={12} md={width}>
      <Card elevation={2} sx={{ p: 2, minHeight: 380, bgcolor: '#f3eed9' }}>
        <Box component="header" mb={2}>
          <Typography variant="subtitle1" align="center" sx={{ fontSize: '1.1em' }}>
            {titulo}
          </Typography>
        </Box>
        <Box mb={2}>
          <CardMedia
            component="img"
            image={image}
            alt="Paseo de mascotas"
            sx={{ height: 180, border: 1, borderRadius: 2, borderColor: 'divider' }}
          />
        </Box>
        <Box mb={2}>
          <Typography variant="body2" align="justify">
            {descripcion}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default ServiciosCard;
