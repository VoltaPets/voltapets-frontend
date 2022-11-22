// Librerías
import { useState, useEffecte, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// MUI
import { Grid, Typography, Button, Card } from '@mui/material';

// Relative Impor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ts
import FormInput from '../../../../../../commons/FormInput';
import FormSelect from '../../../../../../commons/FormSelect';
import FormDatePicker from '../../../../../../commons/FormDatePicker';
import { request } from '../../../../../../../api';
import { GET_VACUNAS } from '../../../../../../../api/endpoints/Vacunas';

const FormularioVacuna = ({ codigoMascota, titulo, setVacunas }) => {
  // Estados
  const [vacunaList, setVacunaList] = useState([]);
  console.log(codigoMascota);
  // Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nombreVacuna: '',
      fechaVacuna: null,
      obligatoria: false,
      codigoVacuna: 0,
      codigoMascota: codigoMascota,
      hasImagen: false,
      imagen: {
        url: '',
        path: '',
        public_id: ''
      }
    }
  });

  // Funciones
  const onSubmit = (data) => console.log(data);

  const getVacunas = async () => {
    const { data } = await request({
      method: 'GET',
      url: GET_VACUNAS
    });
    setVacunaList(data);
  };

  useEffect(() => {
    getVacunas();
  }, []);

  return (
    <Grid
      container
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        justifyContent: 'end',
        border: 1,
        borderColor: 'divider',
        borderRadius: 4,
        p: 2,
        mb: 2
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          {titulo}
        </Typography>
      </Grid>

      <FormSelect
        control={control}
        name="nombreVacuna"
        dataArray={vacunaList}
        errorName={errors.nombreVacuna}
        errorText={errors.nombreVacuna?.message}
        labelText="Nombre de la vacuna"
      />
      <FormDatePicker
        control={control}
        name="fechaVacuna"
        errorName={errors.fechaVacuna}
        errorText={errors.fechaVacuna?.message}
        labelText="Fecha de la vacuna"
      />
      <Button color="info" type="submit" sx={{ textTransform: 'inherit', fontWeight: 'bold' }}>
        Guardar
      </Button>
    </Grid>
  );
};

export default FormularioVacuna;
