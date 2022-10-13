// Librerías
import { useForm } from 'react-hook-form';

// MUI
import SearchIcon from '@mui/icons-material/Search';
import { Card, Grid, Button, InputBase, InputAdorment } from '@mui/material';

// Relative imports
import FormSelect from '../../../../commons/FormSelect';
import { comunas, regiones } from '../../../../../mock/dataArray';

const formSettings = {
  defaultValues: {
    region: 1,
    comuna: ''
  }
};

const BuscadorMascotas = () => {
  // Hooks
  const { control, handleSubmit, watch, reset, resetField, setValue } = useForm(formSettings);

  // Functions
  const onSubmit = (data) => console.log(data);

  return (
    <Card variant="outlined" sx={{ borderRadius: 8, py: 0.5, px: 2, width: '50%' }}>
      <Grid
        container
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <FormSelect
          disabled
          noHelperText
          width={5}
          name="region"
          labelText="Región"
          control={control}
          dataArray={regiones}
        />

        <FormSelect
          noHelperText
          width={4}
          name="comuna"
          labelText="Comunas"
          control={control}
          dataArray={comunas}
        />
        <Grid item xs>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="info"
            sx={{ borderRadius: 4, textTransform: 'inherit', fontWeight: 'bold' }}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BuscadorMascotas;
