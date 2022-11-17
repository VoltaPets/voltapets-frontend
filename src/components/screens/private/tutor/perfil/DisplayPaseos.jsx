// Librerías
import { useRouter } from 'next/router';

// MUI
import { Box, Typography, Card, Button } from '@mui/material';

const DisplayPaseos = () => {
  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleMisMascotas = () => {
    push('/tutor/mis-mascotas');
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', mb: 2 }}>
          Paseos
        </Typography>
        <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify' }}>
          En esta sección podrás ver los paseos que has solicitado y cuál es su estado. Podrás saber
          si tu paseo está en curso o fue rechazado. Además, podrás ver la fecha y hora en la que se
          realiza el paseo, quien es el paseador y la mascota que se va a pasear.
        </Typography>
      </Box>
      <Card
        variant="outlined"
        sx={{ bgcolor: 'rgba(0,0,0, 0.1)', minHeight: 150, overflowY: 'scroll', p: 2 }}
      >
        <Typography variant="body2">No tienes paseos agendados</Typography>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          color="info"
          variant="contained"
          onClick={handleMisMascotas}
          sx={{ textTransform: 'inherit', fontWeight: 'bold', mt: 2 }}
        >
          Ir a Mis Mascotas
        </Button>
      </Box>
    </Box>
  );
};

export default DisplayPaseos;
