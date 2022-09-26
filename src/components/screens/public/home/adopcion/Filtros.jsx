// Librerias
import React from 'react';

// MUI
import { Typography, Box, Grid } from '@mui/material';

// Relative imports
import FormInput from '../../../../commons/FormInput';
import FormSelect from '../../../../commons/FormSelect';

const Filtros = () => {
  return (
    <Box sx={{}}>
      <Box>
        <Typography variant="h6">Ubicación</Typography>
        <input type="text" placeholder="Buscar por ubicación" />
        <input type="text" placeholder="Buscar por comuna" />
      </Box>
      <Box>
        <Typography variant="h6">Tipo de mascota</Typography>
        <input type="text" placeholder="Buscar por tipo de mascota" />
      </Box>
      <Box>
        <Typography variant="h6">Raza de la mascota</Typography>
        <input type="text" placeholder="Buscar por raza de la mascota" />
      </Box>
      <Box>
        <Typography variant="h6">Grupo etario de la mascota</Typography>
        <input type="text" placeholder="Buscar por grupo etario de la mascota" />
      </Box>
      <Box>
        <Typography variant="h6">Sexo de la mascota</Typography>
        <input type="text" placeholder="Buscar por sexo de la mascota" />
      </Box>
      <button>Buscar</button>
    </Box>
  );
};

export default Filtros;
