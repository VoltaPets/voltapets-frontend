// Librería
// MUI
import { Typography, Card, Box } from '@mui/material';

const HistorialCard = ({ id, nombrePaseador, fecha, duracion, horaInicio, horaFin }) => {
  return (
    <Card variant="outlined" sx={{ width: '100%', mb: 1, display: 'flex', p: 2 }}>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body2" align="justify" sx={{ fontWeight: 'bold' }}>
          {nombrePaseador}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 0.7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="body2" align="center">
          {fecha}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="body2" align="center">
          {duracion}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" align="center">
          {horaInicio} - {horaFin}
        </Typography>
      </Box>
    </Card>
  );
};

export default HistorialCard;
