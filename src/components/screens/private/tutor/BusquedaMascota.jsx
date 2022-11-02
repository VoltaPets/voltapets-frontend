// Libraries
import { useForm } from 'react-hook-form';

// MUI
import { Box, Card, Button, Grid, Typography } from '@mui/material';

// Relative Imports
import FormInput from '../../../commons/FormInput';
import FormSelect from '../../../commons/FormSelect';
import { regiones, comunas } from '../../../../mock/dataArray';

const formSettings = {
  defaultValues: {
    region: 1,
    comuna: '',
    calle: '',
    numero: ''
  }
};

const BusquedaMascota = () => {
  const { control, handleSubmit, reset } = useForm(formSettings);

  const handleReset = () => {
    reset(formSettings.defaultValues);
    replace('/adopcion?region=1');
  };

  const onSubmit = (data) => console.log('data', data);

  return (
    <Box
      sx={{
        py: 4,
        bgcolor: 'primary.main'
      }}
    >
      <Box mb={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          Búsqueda de Paseadores
        </Typography>
        <Card variant="outlined" sx={{ p: 1, borderRadius: 4, bgcolor: 'white', width: '90%' }}>
          <Grid
            container
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            spacing={2}
            sx={{ alignItems: 'center', width: '100%', p: 1 }}
          >
            <FormSelect
              disabled
              noHelperText
              width={4}
              name="region"
              labelText="Región"
              control={control}
              dataArray={regiones}
            />
            <FormSelect
              noHelperText
              width={2}
              name="comuna"
              labelText="Comuna"
              control={control}
              dataArray={comunas}
            />
            <FormInput noHelperText width={2} name="calle" labelText="Calle" control={control} />
            <FormInput noHelperText width={1} name="numero" labelText="Número" control={control} />
            <Grid item xs sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                color="secondary"
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              >
                Buscar
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleReset}
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Box mb={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          Resultados
        </Typography>
        <Card
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 4,
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            minHeight: 400
          }}
        >
          <Box sx={{ width: '100%', p: 1 }}>asd</Box>
        </Card>
      </Box>
    </Box>
  );
};

export default BusquedaMascota;
