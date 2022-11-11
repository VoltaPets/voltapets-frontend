// Librerías
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

// MUI
import { Grid } from '@mui/material';

// Relative imports
import Layout from '../../src/components/commons/Layout';
import DisplayPerfil from '../../src/components/screens/private/paseador/DisplayPerfil';
import ParametrosLaborales from '../../src/components/screens/private/paseador/ParametrosLaborales';
import { request } from '../../src/api';
import { PASEADOR_PROFILE } from '../../src/api/endpoints/Usuario';

const paseadorProfile = () => {
  // Estados
  const [perfil, setPerfil] = useState(null);

  // Hooks
  const { enqueueSnackbar } = useSnackbar();

  // Funciones
  const getProfile = async () => {
    try {
      const { data } = await request({
        url: PASEADOR_PROFILE,
        method: 'GET'
      });
      setPerfil(data);
    } catch (error) {
      if (error.isAxiosError) {
        const { data: profileError } = error.response;
        enqueueSnackbar(profileError.mensaje, { variant: 'error' });
      }
    }
  };

  // Effects
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Layout
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
          <DisplayPerfil perfil={perfil} />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <ParametrosLaborales />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default paseadorProfile;
