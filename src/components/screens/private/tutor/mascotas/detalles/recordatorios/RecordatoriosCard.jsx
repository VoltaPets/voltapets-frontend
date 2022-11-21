// Librerías

// MUI
import { Box, Card, Typography, Divider, Button } from '@mui/material';

const RecordatoriosCard = ({ recordatorio }) => {
  return (
    <Card variant="outlined" sx={{ p: 1, display: 'flex', mb: 1 }}>
      <Box sx={{ flex: 0.5, p: 1 }}>
        <Typography variant="h6" color="info.main" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
          {recordatorio.titulo}
        </Typography>
        <Typography variant="body2" color="warning.main" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {recordatorio.fecha}
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
