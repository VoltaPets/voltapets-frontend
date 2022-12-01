import React from 'react';

// MUI
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Grid, Box, Typography, Chip } from '@mui/material';

const SizeDisplay = ({ status }) => {
  return (
    <>
      {status ? (
        <CheckIcon sx={{ fontSize: '1.2em', flex: 0.3 }} color="info.main" />
      ) : (
        <CloseIcon sx={{ fontSize: '1.2em', flex: 0.3 }} color="secondary" />
      )}
    </>
  );
};

const PerrosPermitidosDisplay = ({ perrosAceptados }) => {
  console.log('Perros aceptados', perrosAceptados);
  return (
    <>
      <Grid container mb={2}>
        <Grid item xs={6} py={1}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              Tamaño Toy
            </Typography>
            <SizeDisplay status={perrosAceptados.tamanioToy} />
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              Tamaño Pequeño
            </Typography>
            <SizeDisplay status={perrosAceptados.tamanioPequenio} />
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              Tamaño Mediano
            </Typography>
            <SizeDisplay status={perrosAceptados.tamanioMediano} />
          </Box>
        </Grid>
        <Grid item xs={6} py={1}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              Tamaño Grande
            </Typography>
            <SizeDisplay status={perrosAceptados.tamanioGrande} />
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              Tamaño Gigante
            </Typography>
            <SizeDisplay status={perrosAceptados.tamanioGigante} />
          </Box>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" sx={{ textAlign: 'justify' }} gutterBottom>
        Cantidad de Perros por paseo
      </Typography>
      <Chip
        label={
          perrosAceptados.cantidadPerro > 1
            ? `${perrosAceptados.cantidadPerro} Perros`
            : `${perrosAceptados.cantidadPerro} Perro`
        }
        variant="outlined"
        sx={{ fontWeight: 'bold' }}
        color="warning"
      />
    </>
  );
};

export default PerrosPermitidosDisplay;
