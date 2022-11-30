import { Box, Typography } from '@mui/material';

const DisplayPrecios = ({ descripcion, precio }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography
        variant="body2"
        sx={{ textAlign: 'justify', flex: 1, fontWeight: 'bold'}}
      >
        {descripcion}
      </Typography>

      <Box sx={{  flex: 0.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {precio}
        </Typography>
      </Box>
    </Box>
  );
};

export default DisplayPrecios;
