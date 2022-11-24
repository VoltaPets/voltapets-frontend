// Librerías
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Grid, Card, Box, Typography } from '@mui/material';

// Relative Imports
import Layout from '../../src/components/commons/Layout';
import MascotaCard from '../../src/components/screens/private/tutor/home/MascotaCard';
import BusquedaPaseador from '../../src/components/screens/private/tutor/home/BusquedaPaseador';
import { GET_MASCOTAS } from '../../src/api/endpoints/Mascota';
import { request } from '../../src/api';

function tutorHome() {
  // Estados
  const [mascotas, setMascotas] = useState([]);
  const [paseadores, setPaseadores] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hooks

  // Functions
  const getMascotas = async () => {
    setLoading(true);
    try {
      const { data } = await request(GET_MASCOTAS);
      setMascotas(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  // Effects
  useEffect(() => {
    getMascotas();
  }, []);

  return (
    <Layout
      tutorRequired
      description="Página principal del tutor"
      title="Tutor - Home"
      authRequired={true}
      nextPage="/tutor/home"
    >
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Mis Mascotas
              {/* Test */}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              gap: 4,
              minHeight: 332
            }}
          >
            {loading ? (
              <BeatLoader size={10} />
            ) : mascotas.length === 0 ? (
              <Card variant="outlined" sx={{ p: 2 }}>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  No tienes mascotas registradas
                </Typography>
              </Card>
            ) : (
              mascotas.map((mascota) => <MascotaCard key={mascota.id} mascota={mascota} />)
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <BusquedaPaseador />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default tutorHome;
