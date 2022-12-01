// Librerías
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

// MUI
import { Grid } from '@mui/material';

// Relative imports
import Layout from '../../src/components/commons/Layout';
import DisplayPerfil from '../../src/components/screens/private/paseador/DisplayPerfil';
import ParametrosLaborales from '../../src/components/screens/private/paseador/ParametrosLaborales';
import { request } from '../../src/api';
import { PASEADOR_PROFILE, LABORAL_INFO } from '../../src/api/endpoints/Usuario';

const paseadorProfile = () => {
  // Estados
  const [loading, setLoading] = useState(false);
  const [perfil, setPerfil] = useState(null);
  const [laboral, setLaboral] = useState(null);

  // Hooks
  const { enqueueSnackbar } = useSnackbar();
  const { push } = useRouter();

  // Funciones
  const getProfile = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: PASEADOR_PROFILE,
        method: 'GET'
      });
      setPerfil(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { data: profileError } = error.response;
        profileError && enqueueSnackbar(profileError.message, { variant: 'error' });
      }
    }
  };

  const getLaboralInfo = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: LABORAL_INFO,
        method: 'GET'
      });
      setLaboral(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { data: profileError } = error.response;
        profileError && enqueueSnackbar(profileError.mensaje, { variant: 'error' });
      }
    }
  };

  // Effects
  useEffect(() => {
    getProfile();
    getLaboralInfo();
  }, []);

  return (
    <Layout
      paseadorRequired
      authRequired={true}
      description="Perfil de paseador de la aplicación Volta Pets"
      title="Perfil Paseador"
      nextPage="/paseador/profile"
    >
      <Grid
        container
        sx={{
          bgcolor: 'primary.main',
          height: '100%',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <DisplayPerfil perfil={perfil} onUpload={getProfile} />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <ParametrosLaborales laboral={laboral} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default paseadorProfile;
