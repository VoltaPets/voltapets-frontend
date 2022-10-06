// Librerias
import React from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Typography, Box, Grid, Button } from '@mui/material';

// Relative imports
import FormInput from '../../../../commons/FormInput';
import FormSelect from '../../../../commons/FormSelect';
import { regiones, comunas, tipoMascota } from '../../../../../mock/dataArray';

const formSettings = {
  defaultValues: {
    region: 1,
    comuna: '',
    tipoMascota: '',
    razaMascota: '',
    tamañoMascota: '',
    grupoEtario: '',
    sexoMascota: ''
  }
};

const Filtros = () => {
  // Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(formSettings);

  // Functions
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container sx={{ flexDirection: 'column' }}>
        <Typography variant="h6" mb={2}>
          Ubicación
        </Typography>
        <FormSelect
          disabled
          noHelperText
          name="region"
          labelText="Región"
          control={control}
          errorName={errors.region}
          errorText={errors.region?.message}
          dataArray={regiones}
        />
        <FormSelect
          noHelperText
          name="comuna"
          labelText="Comuna"
          control={control}
          errorName={errors.comuna}
          errorText={errors.comuna?.message}
          dataArray={comunas}
        />
      </Grid>

      <Grid container sx={{ flexDirection: 'column' }}>
        <Typography variant="h6" mb={2}>
          Mascota
        </Typography>
        <FormSelect
          noHelperText
          name="tipoMascota"
          labelText="Tipo de mascota"
          control={control}
          errorName={errors.tipoMascota}
          errorText={errors.tipoMascota?.message}
          dataArray={tipoMascota}
        />
      </Grid>
      <Box>
        <Typography variant="h6">Tipo de mascota</Typography>
        <input type="text" placeholder="Buscar por tipo de mascota" />
      </Box>
      <Box>
        <Typography variant="h6">Raza de la mascota</Typography>
        <input type="text" placeholder="Buscar por raza de la mascota" />
      </Box>
      <Box>
        <Typography variant="h6">Grupo etario de la mascota</Typography>
        <input type="text" placeholder="Buscar por grupo etario de la mascota" />
      </Box>
      <Box>
        <Typography variant="h6">Sexo de la mascota</Typography>
        <input type="text" placeholder="Buscar por sexo de la mascota" />
      </Box>
      <Button type="submit">Buscar</Button>
    </Box>
  );
};

export default Filtros;
