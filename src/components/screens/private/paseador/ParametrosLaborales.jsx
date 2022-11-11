// MUI
import { Card, Button, Box, CardMedia, Typography, Rating } from '@mui/material';

// Relative imports
import DisplayPrecios from './perfil/DisplayPrecios';
import PerrosAceptados from '../../../commons/PerrosAceptados';

const ParametrosLaborales = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        width: '90%'
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
        Parámetros Laborales
      </Typography>
      {/* Perros Aceptados */}
      <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
        <Card variant="outlined" sx={{ p: 2, flex: 0.5, borderRadius: 4 }}>
          <Typography variant="h6" sx={{ textAlign: 'justify', fontWeight: 'bold', mb: 2 }}>
            Perros Aceptados
          </Typography>
          <Box>
            <Typography variant="subtitle1">Tamaño</Typography>
          </Box>
          <PerrosAceptados />
        </Card>

        {/* Tarifas por minuto */}
        <Card variant="outlined" sx={{ p: 2, flex: 0.5, borderRadius: 4 }}>
          <Typography variant="h6" sx={{ textAlign: 'justify', fontWeight: 'bold', mb: 2 }}>
            Tarifas por Minuto
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <DisplayPrecios descripcion="Paseo de necesidades básicas" precio={5000} />
            <DisplayPrecios descripcion="Tiempo de juego con la mascota" precio={6000} />
            <DisplayPrecios descripcion="Socialización con otras mascotas" precio={7000} />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ParametrosLaborales;
