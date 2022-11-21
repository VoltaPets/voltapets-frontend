// Librerías
// MUI
import { Typography, Card, Box } from '@mui/material';

// Relative imports
import HistorialCard from './HistorialCard';

const mockHistorial = [
  {
    id: 1,
    nombrePaseador: 'Nicolás Román',
    fecha: '15-11-2022',
    duracion: '1h 30m',
    horaInicio: '10:00',
    horaFin: '11:30'
  },
  {
    id: 2,
    nombrePaseador: 'Ariel Herrera',
    fecha: '2-12-2022',
    duracion: '3h 30m',
    horaInicio: '14:00',
    horaFin: '17:30'
  },
  {
    id: 3,
    nombrePaseador: 'Samuel Mujica',
    fecha: '14-12-2022',
    duracion: '2hrs',
    horaInicio: '10:00',
    horaFin: '12:00'
  },
  {
    id: 4,
    nombrePaseador: 'Armin Brun',
    fecha: '14-12-2022',
    duracion: '6hrs',
    horaInicio: '10:00',
    horaFin: '16:00'
  },
  {
    id: 5,
    nombrePaseador: 'Yhonnys Isaías',
    fecha: '14-12-2022',
    duracion: '1hr',
    horaInicio: '17:00',
    horaFin: '18:00'
  }
];

const DisplayHistorial = () => {
  return (
    <Box>
      <Typography variant="h6" align="justify" sx={{ fontWeight: 'bold', mb: 2 }}>
        Historial de Paseos
      </Typography>
      <Typography variant="body2" align="justify" mb={2}>
        Aquí puedes ver el historial de paseos de tu mascota.
      </Typography>
      <Card
        variant="outlined"
        sx={{
          width: '100%',
          p: 2,
          maxHeight: 200,
          overflowY: 'scroll',
          bgcolor: 'rgba(0,0,0,0.1)'
        }}
      >
        {mockHistorial.map((historial) => (
          <HistorialCard key={historial.id} {...historial} />
        ))}
      </Card>
    </Box>
  );
};

export default DisplayHistorial;
