// Librerías
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// MUI
import { Grid, Typography, Button } from '@mui/material';

// Relative Impor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ts
import FormDatePicker from '../../../../../../commons/FormDatePicker';
import { vacunaSchema } from '../vacunas/vacunaSchema';

const FormularioVacuna = ({ vaccSextuple = false, codigoMascota, titulo, vacunas, setVacunas }) => {
  // Estados
  const [isSextuple, setIsSextuple] = useState(false);
  const [isOctuple, setIsOctuple] = useState(false);

  // Hooks
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      nombreVacuna: vaccSextuple ? 'Séxtuple' : 'Óctuple',
      fechaVacunacion: null,
      obligatoria: false,
      codigoVacuna: vaccSextuple ? 2 : 3,
      codigoMascota: codigoMascota,
      imagen: null
    },
    resolver: yupResolver(vacunaSchema)
  });

  // Funciones
  const onSubmit = (data) => {
    if (vaccSextuple) {
      setIsSextuple(true);
      setVacunas((prev) => [...prev, data]);
    } else {
      setIsOctuple(true);
      setVacunas((prev) => [...prev, data]);
    }
    reset({ fechaVacunacion: null });
  };

  const handleDelete = () => {
    if (vaccSextuple) {
      setIsSextuple(false);
      setVacunas((prev) => prev.filter((vacuna) => vacuna.codigoVacuna !== 2));
    } else {
      setIsOctuple(false);
      setVacunas((prev) => prev.filter((vacuna) => vacuna.codigoVacuna !== 3));
    }
  };

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
        p: 2
      }}
    >
      <Grid item xs={12}>
        <Typography variant="subtitle1" sx={{ color: '#000', fontWeight: 'bold' }}>
          {titulo}
        </Typography>
      </Grid>

      <FormDatePicker
        noMb
        control={control}
        disabled={(vaccSextuple && isSextuple) || (!vaccSextuple && isOctuple)}
        name="fechaVacunacion"
        errorName={errors.fechaVacunacion}
        errorText={
          errors.fechaVacunacion?.message || isSextuple || isOctuple ? 'Vacuna ya registrada' : ''
        }
        labelText="Fecha vacuna"
      />
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 4 }}>
        <Button
          variant="outlined"
          size="small"
          disabled={(vaccSextuple && isSextuple) || (!vaccSextuple && isOctuple)}
          color="info"
          type="submit"
          sx={{ textTransform: 'inherit', fontWeight: 'bold', flex: 1 }}
        >
          Guardar
        </Button>
        <Button
          disabled={(vaccSextuple && isSextuple) || (!vaccSextuple && isOctuple)}
          variant="outlined"
          size="small"
          color="error"
          sx={{ fontWeight: 'bold', textTransform: 'inherit' }}
          onClick={handleDelete}
        >
          Borrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormularioVacuna;
