// Librerías

// MUI
import { Box, Card, Typography, Button } from '@mui/material';

// Relative Imports
import RecordatorioCard from './RecordatoriosCard';

const recordatorios = [
  {
    id: 1,
    titulo: 'Mi primer recordatorio',
    fecha: '10-11-2022',
    descripcion:
      'El martes 10 de noviembre de 2022, debo colocarle la vacuna de la rabia a Chola. En la veterinaria ubicada en avenida 1, calle 2, casa 3.'
  },
  {
    id: 2,
    titulo: 'Celebración cumpleaños de Chola',
    fecha: '15-07-2022',
    descripcion:
      'Comprarle un regalo a Chola para su cumpleaños y adornar la casa con sus fotos. Además invitar a sus amigos perrunos a la fiesta.'
  }
];

const DisplayRecordatorios = () => {
  return (
    <>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
            Recordatorios
          </Typography>
          <Button
            variant="contained"
            color="info"
            sx={{ fontWeight: 'bold', textTransform: 'inherit' }}
          >
            Administrar
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Card
            variant="outlined"
            sx={{ p: 2, flex: 1, bgcolor: 'rgba(0,0,0,0.1)', maxHeight: 280, overflowY: 'scroll' }}
          >
            {recordatorios.map((recordatorio) => (
              <RecordatorioCard key={recordatorio.id} recordatorio={recordatorio} />
            ))}
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default DisplayRecordatorios;
