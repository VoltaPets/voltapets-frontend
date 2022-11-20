// Librerías
// MUI
import { Box, Typography } from '@mui/material';
// Relative imports

const DisplayNota = ({ categoria = 'Categoría', nota = 0.0 }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'justify' }}>
          {categoria}:
        </Typography>
      </Box>
      <Box sx={{ flex: 0.9 }}>
        <Typography variant="body2" align="justify">
          {nota}
        </Typography>
      </Box>
    </Box>
  );
};

export default DisplayNota;
