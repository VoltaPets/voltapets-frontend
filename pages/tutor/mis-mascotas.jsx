// Librerías
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Grid, Card, Box, Button, Typography } from '@mui/material';

// Relative imports
import Layout from '../../src/components/commons/Layout';
import DisplayMascotasProfile from '../../src/components/screens/private/tutor/mascotas/DisplayMascotasProfile';
import MascotaProfileCard from '../../src/components/screens/private/tutor/mascotas/MascotaProfileCard';
import MascotaDetail from '../../src/components/screens/private/tutor/mascotas/MascotaDetail';
import ModalCreacionMascota from '../../src/components/screens/private/tutor/mascotas/ModalCreacionMascota';

import { GET_MASCOTAS } from '../../src/api/endpoints/Mascota';
import { request } from '../../src/api';

export default function MisMascotasPage() {
  // Estados
  const [mascotasList, setMascotasList] = useState([]);
  const [selectedMascota, setSelectedMascota] = useState(0);
  const [loading, setLoading] = useState(true);
  const [openCreacionMascota, setOpenCreacionMascota] = useState(false);

  // Funciones
  const getMascotasList = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: GET_MASCOTAS,
        method: 'GET'
      });
      setMascotasList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleCreacionMascota = () => {
    setOpenCreacionMascota(true);
  };

  const handleCloseModalCreacionMascota = () => {
    setOpenCreacionMascota(false);
    getMascotasList();
  };

  // Hooks
  const router = useRouter();

  const handleSelected = (mascota) => {
    setSelectedMascota(mascota);
  };

  // Effects
  useEffect(() => {
    getMascotasList();
  }, []);

  useEffect(() => {
    if (!router.query.id) {
      return setSelectedMascota(mascotasList[0]?.id);
    }

    setSelectedMascota(router.query.id);
  }, [router.query.mascota, mascotasList]);

  return (
    <Layout
      title="Tutor - Mis Mascotas"
      description="Página de las mascotas de un tutor"
      tutorRequired
      authRequired
      nextPage={'tutor/mis-mascotas'}
    >
      <ModalCreacionMascota
        onClose={handleCloseModalCreacionMascota}
        open={openCreacionMascota}
        setOpen={setOpenCreacionMascota}
      />

      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            gap: 2,
            p: 4
          }}
        >
          {/* Mis mascotas */}
          <Card variant="outlined" sx={{ flex: 0.5, p: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
              Mis Mascotas
            </Typography>
            <Card
              variant="outlined"
              sx={{
                bgcolor: 'rgba(0,0,0,0.1)',
                height: 350,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                overflowY: 'scroll',
                gap: 1,
                p: 2
              }}
            >
              {loading ? (
                <BeatLoader size={10} />
              ) : mascotasList.length === 0 ? (
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  No tienes mascotas registradas
                </Typography>
              ) : (
                mascotasList.map((mascota) => {
                  return (
                    <MascotaProfileCard
                      key={mascota.id}
                      mascota={mascota}
                      selected={selectedMascota === mascota.id}
                      onSelected={handleSelected}
                    />
                  );
                })
              )}
            </Card>

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 2 }}>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleCreacionMascota}
                sx={{ mt: 2, flex: 1, fontWeight: 'bold', textTransform: 'inherit' }}
              >
                Administrar Mascotas
              </Button>
            </Box>
          </Card>

          <DisplayMascotasProfile
            mascotas={mascotasList}
            handleSelected={handleSelected}
            selectedMascota={selectedMascota}
          />
        </Grid>
        <Grid item xs={12} sx={{ py: 4, px: 2 }}>
          <MascotaDetail selectedMascota={selectedMascota} />
        </Grid>
      </Grid>
    </Layout>
  );
}
