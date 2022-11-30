// MUI
import { Box, Typography } from '@mui/material';

const Pasos = ({ Icono, titulo = 'titulo', desc = 'lorem ipsum', color }) => {
  return (
    <Box sx={{ px: 2, flex: 1 }}>
      <Box>
        <Typography
          variant="h5"
          sx={{ flex: 0.2, width: '100%', textAlign: 'center', fontWeight: 'bold' }}
        >
          {Icono}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            flex: 1,
            width: '100%',
            textAlign: 'center',
            color: color,
            fontWeight: 'bold',
            mb: 2
          }}
        >
          {titulo}
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ width: '100%', textAlign: 'justify' }}>
        {desc}
      </Typography>
    </Box>
  );
};

export default Pasos;
