// Librerías
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

// MUI
import { Grid } from '@mui/material';

// Relative imports
import Layout from '../../src/components/commons/Layout';
import DisplayMascotasProfile from '../../src/components/screens/private/tutor/mascotas/DisplayMascotasProfile';
import MascotaDetail from '../../src/components/screens/private/tutor/mascotas/MascotaDetail';
import { GET_MASCOTAS } from '../../src/api/endpoints/Mascota';
import { request } from '../../src/api';

export default function MisMascotasPage() {
  // Estados
  const [mascotas, setMascotas] = useState([]);
  const [selectedMascota, setSelectedMascota] = useState({});

  // Funciones
  const getMascotas = async () => {
    const { data } = await request({
      url: GET_MASCOTAS,
      method: 'GET'
    });
    setMascotas(data);
  };

  // Hooks
  const { enqueueSnackbar } = useSnackbar();

  const handleSelected = (mascota) => {
    setSelectedMascota(mascota);
    enqueueSnackbar(`Has seleccionado a ${mascota.nombre}`, {
      variant: 'info',
      preventDuplicate: true,
    });
  };

  // Effects
  useEffect(() => {
    getMascotas();
  }, []);

  useEffect(() => {
    if (mascotas.length > 0) {
      setSelectedMascota(mascotas[0]);
    }
  }, [mascotas]);

  return (
    <Layout
      title="Tutor - Mis Mascotas"
      description="Página de las mascotas de un tutor"
      tutorRequired
      authRequired
      nextPage={'tutor/mis-mascotas'}
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
          <DisplayMascotasProfile
            mascotas={mascotas}
            handleSelected={handleSelected}
            selectedMascota={selectedMascota}
          />
        </Grid>
        <Grid item xs={12} sx={{ p: 4 }}>
          <MascotaDetail selectedMascota={selectedMascota} />
        </Grid>
      </Grid>
    </Layout>
  );
}
