// Librerias
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

// MUI
import ClearIcon from '@mui/icons-material/Clear';
import {
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from '@mui/material';

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

const Filtros = ({ open, setOpen }) => {
  // States
  const [razas, setRazas] = useState([]);

  // Hooks
  const { control, handleSubmit, watch, reset, resetField, setValue } = useForm(formSettings);
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
    console.log(data);
    const params = {
      ...getFormattedParams(data)
    };

    replace('/adopcion', {
      query: new URLSearchParams(params).toString()
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    reset(formSettings.defaultValues);
    replace('/adopcion?region=1');
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

  useEffect(() => {
    if (isReady) {
      if(query.tipo && typeof query.tipo === 'string') {
        
        setValue('tipo', parseInt(query.tipo));
      }
    }
  }, [isReady]);
      

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      sx={{ borderRadius: '16px !important' }}
      PaperProps={{
        sx: {
          borderRadius: '16px !important',
          overflowY: 'auto'
        }
      }}
    >
      {/* Header */}
      <DialogTitle
        component="header"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: '#fff',
          zIndex: 100,
          position: 'sticky',
          top: 0,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 0,
          height: 64
        }}
      >
        <Box>
          <IconButton onClick={handleClose}>
            <ClearIcon />
          </IconButton>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">Filtros</Typography>
        </Box>
      </DialogTitle>

      {/* Contenido */}
      <DialogContent
        noValidate
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', width: 780, p: 4 }}
      >
        <Typography
          variant="h6"
          sx={{
            width: '',
            textAlign: 'center',
            borderBottom: 1,
            pb: 1,
            borderColor: 'divider',
            mt: 4,
            fontWeight: 'bold'
          }}
        >
          Ubicación
        </Typography>
        <Typography variant="subtitle1">
          Selecciona la región y comuna donde quieres buscar
        </Typography>
        <Typography variant="caption" mb={2}>
          (Actualmente solo se encuentra disponible la región Metropolitana)
        </Typography>

        <Grid container spacing={2}>
          <FormSelect
            disabled
            noHelperText
            width={6}
            name="region"
            labelText="Región"
            control={control}
            dataArray={regiones}
          />
          <FormSelect
            noHelperText
            width={6}
            name="comuna"
            labelText="Comuna"
            control={control}
            dataArray={comunas}
          />
        </Grid>

        <Box sx={{ my: 4 }}>
          <Divider />
        </Box>

        <Typography
          variant="h6"
          sx={{
            width: '',
            textAlign: 'center',
            borderBottom: 1,
            pb: 1,
            borderColor: 'divider',
            fontWeight: 'bold'
          }}
        >
          Mascota
        </Typography>
        <Typography variant="subtitle1">
          Selecciona el tipo de mascota que quieres adoptar, su raza, tamaño y sexo
        </Typography>
        <Typography variant="caption" mb={2}>
          (Actualmente solo se encuentran disponibles perros y gatos)
        </Typography>
        <Grid container spacing={2} sx={{ mb: 6 }}>
          <FormSelect
            noHelperText
            width={4}
            name="tipo"
            labelText="Tipo"
            control={control}
            dataArray={tipoMascota}
          />
          <FormSelect
            noHelperText
            width={4}
            name="tamaño"
            labelText="Tamaño"
            control={control}
            dataArray={sizeMascota}
          />
          <FormSelect
            noHelperText
            width={4}
            name="grupoEtario"
            labelText="Grupo Etario"
            control={control}
            dataArray={grupoEtario}
          />
          <FormSelect
            noHelperText
            width={6}
            name="raza"
            labelText="Raza"
            control={control}
            dataArray={razas}
          />
          <FormSelect
            noHelperText
            width={6}
            name="sexo"
            labelText="Sexo"
            control={control}
            dataArray={sexoMascota}
          />
        </Grid>
      </DialogContent>

      {/* Botones */}
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: 1,
          borderColor: 'divider',
          p: 2
        }}
      >
        <Button
          size="large"
          color="warning"
          variant="text"
          onClick={handleReset}
          sx={{ texTransform: 'inherit', width: '30%' }}
        >
          Limpiar
        </Button>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          sx={{ texTransform: 'inherit', width: '30%' }}
        >
          Buscar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Filtros;
