// Librerías
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

// MUI
import { Grid, Card, Box, Typography } from '@mui/material';

// Relative Imports
import { GET_ALL_USERS, GET_ALL_PETS } from '../../../../../api/endpoints/Admin';
import { request } from '../../../../../api';
import AdminMascotaCard from '../AdminMascotaCard';

const GeneralTab = () => {
  // Estados
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [mascotas, setMascotas] = useState([]);

  // Hooks
  const { enqueueSnackbar } = useSnackbar();
  const { push } = useRouter();

  // Variables Usuarios
  const paseadores = usuarios.filter((usuario) => usuario.rol?.descripcion === 'Paseador');
  const tutores = usuarios.filter((usuario) => usuario.rol?.descripcion === 'Tutor');
  const administradores = usuarios.filter(
    (usuario) => usuario.rol?.descripcion === 'Administrador'
  );

  // Funciones
  const getUsuarios = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: GET_ALL_USERS,
        method: 'GET'
      });
      setUsuarios(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      console.log(data);
    }
  };

  const getMascotas = async () => {
    setLoading(true);
    try {
      const { data } = await request({
        url: GET_ALL_PETS,
        method: 'GET'
      });
      setMascotas(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.isAxiosError) {
        const { data } = error.response;
        console.log(data);
      } else {
        enqueueSnackbar('Error de conexión', { variant: 'error' });
      }
    }
  };

  const handleRedirecionUsuarios = () => {
    push('/administracion?tab=usuarios');
  };

  // Effects
  useEffect(() => {
    getUsuarios();
    getMascotas();
  }, []);

  console.log(mascotas);

  return (
    <Grid component={Card} variant="outlined" sx={{ borderRadius: 4, p: 2 }} container>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'black' }}>
          General
        </Typography>
      </Grid>

      {/* Total Usuarios */}
      <Grid item xs={12} mb={6}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Total de usuarios
        </Typography>

        <Card
          variant="outlined"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            height: 160,
            p: 2
          }}
        >
          {loading ? (
            <BeatLoader color="#22577E" size={10} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                  onClick={handleRedirecionUsuarios}
                >
                  <Typography variant="h6" color="info.main" sx={{ fontWeight: 'bold' }}>
                    Paseadores
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    {paseadores.length}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                  onClick={handleRedirecionUsuarios}
                >
                  <Typography variant="h6" color="warning.main" sx={{ fontWeight: 'bold' }}>
                    Tutores
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    {tutores.length}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                  onClick={handleRedirecionUsuarios}
                >
                  <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 'bold' }}>
                    Administradores
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    {administradores.length}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          )}
        </Card>
      </Grid>

      {/* Total Mascotas */}
      <Grid items xs={12}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Total de mascotas:
          </Typography>
          <Typography variant="h5" color="warning.main" sx={{ fontWeight: 'bold' }}>
            {loading ? <BeatLoader size={10} /> : mascotas.length}
          </Typography>
        </Box>
        <Card
          variant="outlined"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            height: 425,
            overflowY: 'auto',
            p: 2
          }}
        >
          {loading ? (
            <BeatLoader color="#22577E" size={10} />
          ) : (
            <Grid container spacing={1} sx={{ alignItems: 'start', flex: 1, height: '100%' }}>
              {mascotas.map((mascota) => (
                <AdminMascotaCard key={mascota.id} mascota={mascota} />
              ))}
            </Grid>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default GeneralTab;
