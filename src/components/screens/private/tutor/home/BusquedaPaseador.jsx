// Libraries
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Box, Card, Button, Grid, Typography } from '@mui/material';

// Relative Imports
import FormInput from '../../../../commons/FormInput';
import FormSelect from '../../../../commons/FormSelect';
import PaseadorServicioCard from './PaseadorServicioCard';
import { GET_COMUNAS, GET_REGIONES } from '../../../../../api/endpoints/Ubicacion';
import { GET_PASEADORES_CERCANOS } from '../../../../../api/endpoints/Usuario';
import { request } from '../../../../../api/';

const formSettings = {
  defaultValues: {
    region: 7,
    comuna: 86
  }
};

const BusquedaPaseador = () => {
  // Estados
  const [loading, setLoading] = useState(false);
  const [regionList, setRegionList] = useState([]);
  const [comunaList, setComunaList] = useState([]);
  const [paseadorList, setPaseadorList] = useState([]);

  // Hooks
  const { control, handleSubmit, reset } = useForm(formSettings);

  // Handlers
  const handleReset = () => {
    reset(formSettings.defaultValues);
  };

  // Funciones
  const getRegiones = async () => {
    const { data } = await request({
      url: GET_REGIONES,
      method: 'GET'
    });
    setRegionList(data);
  };

  const getComunas = async (codigoRegion) => {
    const { data } = await request({
      url: GET_COMUNAS(codigoRegion),
      method: 'GET'
    });
    setComunaList(data);
  };

  const getPaseadoresCercanos = async (codigoComuna) => {
    setLoading(true);
    try {
      const { data } = await request({
        url: GET_PASEADORES_CERCANOS,
        method: 'GET',
        params: { codigoComuna }
      });
      setPaseadorList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { data } = error.response;
        console.log('data', data);
      }
    }
  };

  const onSubmit = async (searchData) => {
    try {
      const comunaID = searchData.comuna;
      getPaseadoresCercanos(comunaID);
    } catch (error) {
      console.log(error);
    }
  };

  // Effects
  useEffect(() => {
    getRegiones();
    getComunas(7);
  }, []);

  useEffect(() => {
    getPaseadoresCercanos(86);
  }, []);


  return (
    <Box
      sx={{
        py: 4,
        bgcolor: 'primary.main'
      }}
    >
      <Box mb={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              dataArray={regionList}
            />
            <FormSelect
              noHelperText
              width={2}
              name="comuna"
              labelText="Comuna"
              control={control}
              dataArray={comunaList}
            />
            {/* <FormInput noHelperText width={2} name="calle" labelText="Calle" control={control} noMb />
            <FormInput noHelperText width={1} name="numero" labelText="Número" control={control} noMb /> */}
            <Grid item xs sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                color="secondary"
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
              >
                {loading ? <BeatLoader size={10} /> : 'Buscar'}
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
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Resultados
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            width: '90%',
            borderRadius: 4,
            bgcolor: 'white',
            minHeight: 400,
            maxHeight: 800,
            overflowY: 'scroll',
            pb: 2,
            pr: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {loading ? (
            <BeatLoader size={10} />
          ) : paseadorList.length === 0 ? (
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
              No se encontraron resultados
            </Typography>
          ) : (
            paseadorList.map((paseador) => (
              <PaseadorServicioCard key={paseador.id} paseador={paseador} />
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default BusquedaPaseador;
