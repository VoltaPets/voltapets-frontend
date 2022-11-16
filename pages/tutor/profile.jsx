// Librerías
// MUI
import { Grid, Box, Card, Typography } from '@mui/material';

// Relative imports
import Layout from '../../src/components/commons/Layout';
import DisplayPerfilTutor from '../../src/components/screens/private/tutor/perfil/DisplayPerfilTutor';

function tutorProfile() {
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
          <DisplayPerfilTutor />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default tutorProfile;
