// Librerías
import { useForm } from 'react-hook-form';

// MUI
import { Dialog, Box, Grid, Typography, Button, Card } from '@mui/material';

// Relative Imports
import FormDatePicker from '../../../../../commons/FormDatePicker';

const ModalEdicionVacunas = ({ open, onClose }) => {
  // Estados

  // Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box sx={{ display: 'flex', p: 2 }}>
        <Button
          color="info"
          variant="contained"
          sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
          onClick={onClose}
        >
          Cerrar
        </Button>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            Vacunas
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" align="justify">
          En este apartado podrás ver las vacunas podrás registrar las vacunas que ha recibido tu
          mascota. Recuerda que es importante que estén al día para evitar enfermedades. Por ley te
          recordamos que la vacuna de la rabia es <strong>obligatoria</strong>.
        </Typography>
      </Box>
      <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
        <Card variant="outlined" sx={{ p: 2, flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Vacuna Antirrábica
          </Typography>
          <Grid container spacing={2} sx={{ display: 'flex' }}>
            <Grid item xs={12} md={6}>
              <input type="file" />
            </Grid>
            <FormDatePicker control={control} name="" width={6} />
          </Grid>
        </Card>
        <Card variant="outlined" sx={{ p: 2, flex: 1 }}>
          Otras Vacunas
        </Card>
      </Box>
    </Dialog>
  );
};

export default ModalEdicionVacunas;

/*
[
  {
    nombreVacuna,
    fecha,
    obligatoria
    codigoVacuna
    coigoMascota
    hasImagen
    imagen
  },
]


*/