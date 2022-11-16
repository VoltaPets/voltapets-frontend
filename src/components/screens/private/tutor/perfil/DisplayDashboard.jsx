// Librerías

// MUI
import { Box, Typography } from '@mui/material';

const DisplayDashboard = () => {
  return (
    <Box sx={{ p: 4, display: 'flex', gap: 2 }}>
      <Box sx={{ border: 1, p: 2, flex: 1 }}>A</Box>
      <Box sx={{ border: 1, p: 2, flex: 1 }}>B</Box>
    </Box>
  );
};

export default DisplayDashboard;
