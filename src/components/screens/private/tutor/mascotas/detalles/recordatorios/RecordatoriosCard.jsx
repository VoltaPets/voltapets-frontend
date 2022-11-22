// Librerías

// MUI
import { Box, Card, Typography, Divider, Button } from '@mui/material';

const RecordatoriosCard = ({ recordatorio }) => {
  const fechaRecordatorio = new Date(recordatorio.fechaPublicacion).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <Card variant="outlined" sx={{ p: 1, display: 'flex', mb: 1, height: 150, width: '100%' }}>
      <Box sx={{ flex: 0.5, p: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', fontSize: '0.9em', fontWeight: 'bold', mb: 2 }}
        >
          {recordatorio.titulo}
        </Typography>
        <Typography
          variant="subtitle2"
          color="warning.main"
          sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '0.7em' }}
        >
          {fechaRecordatorio}
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ flex: 1, p: 1 }}>
        <Typography variant="body2" sx={{ fontSize: '0.8em', textAlign: 'justify' }}>
          {recordatorio.descripcion}
        </Typography>
      </Box>
    </Card>
  );
};

export default RecordatoriosCard;
