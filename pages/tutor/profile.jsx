// Librerías
import { useState, useEffect } from 'react';

// MUI
import { Grid } from '@mui/material';

// Relative imports
import Layout from '../../src/components/commons/Layout';
import DisplayPerfilTutor from '../../src/components/screens/private/tutor/perfil/DisplayPerfilTutor';
import { TUTOR_PROFILE } from '../../src/api/endpoints/Usuario';
import { request } from '../../src/api';

function tutorProfile() {
  // Estados
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);

  // Funciones
  const getPerfil = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: TUTOR_PROFILE,
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
      f;
    }
  };

  console.log(perfil);

  // Efectos
  useEffect(() => {
    getPerfil();
  }, []);

  return (
    <Layout
      title="Perfil Tutor"
      authRequired
      tutorRequired
      description={`Pagina de perfil del tutor`}
      nextPage={'tutor/profile'}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4
          }}
        >
          <DisplayPerfilTutor perfil={perfil} />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default tutorProfile;
