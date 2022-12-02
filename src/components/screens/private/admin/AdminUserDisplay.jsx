// Librerías
// MUI
import { Card, Box, Avatar, Typography } from '@mui/material';

const AdminUserDisplay = ({ usuario, paseador }) => {
  // Variables
  const fullName = `${usuario?.nombre} ${usuario?.apellido}`;

  return (
    <Card variant="outlined" sx={{ width: '100%', p: 1, borderRadius: 10, mb: 1, display: 'flex' }}>
      <Box sx={{ flex: 1 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          sx={{ width: 64, height: 64 }}
        />
      </Box>
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {fullName}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, p: 2 }}> B</Box>
    </Card>
  );
};

export default AdminUserDisplay;
