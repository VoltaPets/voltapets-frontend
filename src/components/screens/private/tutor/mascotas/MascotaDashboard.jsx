// Librerías

// MUI
import { Card, Box, CardMedia, Typography } from '@mui/material';

const MascotaDashboard = ({ nombre, raza, edadRegistro, imagen }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 1,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 1
      }}
    >
      <CardMedia
        component="img"
        src={imagen.url + imagen.path}
        sx={{ height: 70, width: 70, borderRadius: 4, flex: 0.2 }}
        onError={(e) => {
          e.currentTarget.src = '/logo.jpg';
          e.currentTarget.onerror = null;
        }}
      />
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Box>
          <Typography variant="caption">Nombre</Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {nombre}
          </Typography>
        </Box>
        <Typography variant="subtitle2">{raza.descripcion}</Typography>
        <Typography variant="h6">{edadRegistro}</Typography>
      </Box>
    </Card>
  );
};

export default MascotaDashboard;
