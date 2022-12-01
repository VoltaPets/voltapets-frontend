// Librerías
import { useForm } from 'react-hook-form';

// MUI
import { Grid, Card, Button, Typography } from '@mui/material';

// Relative Imports
import FormInput from '../../../../commons/FormInput';
import FormDatePicker from '../../../../commons/FormDatePicker';

const BuscadorPaseosAgendados = ({ mb = 0 }) => {
  // Hooks
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();
  return (
    <Grid
      item
      xs={12}
      my={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: mb
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
        Paseos Agendados
      </Typography>
      <Card variant="outlined" sx={{ p: 2, width: '90%' }}>
        <Grid
          container
          spacing={4}
          component="form"
          sx={{ width: '100%' }}
          noValidate
          onSubmit={() => console.log('asd')}
        >
          <FormInput
            name="nombre"
            labelText="Nombre"
            control={control}
            errorName={errors.nombre}
            errorText={errors.nombre?.message}
            placeholderText="Nombre"
            width={5}
          />
          <FormDatePicker
            name="fecha"
            labelText="Fecha"
            control={control}
            errorName={errors.fecha}
            errorText={errors.fecha?.message}
            placeholderText="Fecha"
            width={5}
          />

          <Grid item xs sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="info"
              sx={{ fontWeight: 'bold', textTransform: 'none' }}
            >
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default BuscadorPaseosAgendados;
