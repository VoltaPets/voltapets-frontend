// Librerias
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

// MUI
import { Typography, Box, Grid, Button } from '@mui/material';

// Relative imports
import {
  regiones,
  comunas,
  tipoMascota,
  razaGato,
  razaPerro,
  grupoEtario,
  sizeMascota,
  sexoMascota
} from '../../../../../mock/dataArray';
import FormSelect from '../../../../commons/FormSelect';
import { getFormattedParams } from '../../../../../../pages/adopcion';

const formSettings = {
  defaultValues: {
    region: 1,
    comuna: '',
    tipo: '',
    raza: '',
    tamaño: '',
    grupoEtario: '',
    sexo: ''
  }
};

const Filtros = () => {
  // States
  const [razas, setRazas] = useState([]);

  // Hooks
  const { control, handleSubmit, watch, reset, resetField } = useForm(formSettings);
  const { replace, query, isReady } = useRouter();

  // Functions

  const watchTipo = watch(['tipo']);

  const updateRaza = (tipoID) => {
    switch (tipoID) {
      case 1:
        setRazas(razaPerro);
        break;
      case 2:
        setRazas(razaGato);
        break;
      default:
        setRazas([]);
    }
  };

  const onSubmit = (data) => {
    const params = {
      ...getFormattedParams(data)
    };

    replace('/adopcion', {
      query: new URLSearchParams(params).toString()
    });
  };

  // Effects
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      switch (name) {
        case 'tipo':
          resetField('raza');
          setRazas((prev) => ({ ...prev, raza: '' }));
          updateRaza(value.tipo);
          break;

        default:
          updateRaza(value.tipo);
          break;
      }
    });
    return () => subscription.unsubscribe();
  }, [watchTipo]);

  return (
    <Box
      noValidate
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Typography
        variant="h6"
        sx={{
          width: '',
          textAlign: 'center',
          borderBottom: 1,
          pb: 1,
          borderColor: 'divider'
        }}
      >
        Ubicación
      </Typography>
      <Grid container sx={{ flexDirection: 'column', mb: 8, gap: 2 }}>
        <FormSelect
          disabled
          noHelperText
          name="region"
          labelText="Región"
          control={control}
          dataArray={regiones}
        />
        <FormSelect
          noHelperText
          name="comuna"
          labelText="Comuna"
          control={control}
          dataArray={comunas}
        />
      </Grid>

      <Typography
        variant="h6"
        sx={{
          width: '',
          textAlign: 'center',
          borderBottom: 1,
          pb: 1,
          borderColor: 'divider'
        }}
      >
        Mascota
      </Typography>
      <Grid container sx={{ flexDirection: 'column', mb: 6, gap: 2 }}>
        <FormSelect
          noHelperText
          name="tipo"
          labelText="Tipo"
          control={control}
          dataArray={tipoMascota}
        />
        <FormSelect noHelperText name="raza" labelText="Raza" control={control} dataArray={razas} />
        <FormSelect
          noHelperText
          name="tamaño"
          labelText="Tamaño"
          control={control}
          dataArray={sizeMascota}
        />
        <FormSelect
          noHelperText
          name="grupoEtario"
          labelText="Grupo Etario"
          control={control}
          dataArray={grupoEtario}
        />
        <FormSelect
          noHelperText
          name="sexo"
          labelText="Sexo"
          control={control}
          dataArray={sexoMascota}
        />
      </Grid>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button type="submit" color="secondary" variant="contained" fullWidth>
          Buscar
        </Button>
        <Button
          onClick={() => reset()}
          type="submit"
          color="warning"
          sx={{ color: 'white' }}
          variant="contained"
          fullWidth
        >
          Limpiar
        </Button>
      </Box>
    </Box>
  );
};

export default Filtros;
