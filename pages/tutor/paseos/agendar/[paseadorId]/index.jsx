// Librerías
import https from 'https';

// MUI

import { Grid, Chip, Card, Rating, CardMedia, Divider, Box, Typography } from '@mui/material';

// Relative imports
import Layout from '../../../../../src/components/commons/Layout';
import AgendaPaseos from '../../../../../src/components/screens/private/tutor/paseo/AgendaPaseos';
import { clpFormatter } from '../../../../../src/utils/currencyFormat';
import { GET_PASEADOR_ID, GET_ALL_PASEADORES } from '../../../../../src/api/endpoints/Usuario';
import PerrosPermitidos from '../../../../../src/components/screens/private/tutor/paseo/PerrosPermitidosDisplay';

function AgendarPaseoPage({ paseador }) {
  // Variables
  const fullName = paseador?.nombreCompleto || 'Nombre Apellido';
  const img = paseador?.imagen || '/pawBg.png';
  const descripcion = paseador?.descripcion || 'Descripción aun no disponible';
  const experiencia = paseador.experiencia?.descripcion;
  const tarifaBasica = clpFormatter.format(paseador.tarifas[0].basico || 0);
  const tarifaJuego = clpFormatter.format(paseador.tarifas[0].juego || 0);
  const tarifaSocial = clpFormatter.format(paseador.tarifas[0].social || 0);
  const perrosAceptados = paseador.perrosAceptados || [];

  console.log('Paseador', paseador);

  return (
    <Layout description="Página para agendar paseo" title="Agendar Paseo" authRequired={true}>
      <Grid container mb={4}>
        {/* Información de perfil */}
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}
        >
          <Box sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Perfil de paseador
            </Typography>
          </Box>

          <Card variant="outlined" sx={{ width: '90%', p: 2, borderRadius: 4, display: 'flex' }}>
            {/* Foto e información */}
            <Box
              component="aside"
              sx={{ flex: 0.4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <CardMedia
                component="img"
                image={img}
                onError={(e) => {
                  e.currenTarget.src = '/pawBg.png';
                  e.currenTarget.onerror = null;
                }}
                alt="Foto de paseador"
                sx={{
                  width: '100%',
                  maxHeight: 200,
                  objectFit: 'cover',
                  borderRadius: 4,
                  mb: 1
                }}
              />

              <Box
                mb={2}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                  {fullName}
                </Typography>
                <Typography variant="body1">{experiencia}</Typography>
              </Box>
              <Rating value={4} readOnly />
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

            <Box component="main" sx={{ flex: 1, display: 'flex' }}>
              {/* Descripción y tarifas */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Descripción
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  {descripcion}
                </Typography>

                <Box
                  mt={4}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Tarifas por minuto
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Paseo de necesidades básicas:{' '}
                    </Typography>
                    <Typography variant="subtitle2">{tarifaBasica}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Tiempo de juego con la mascota:{' '}
                    </Typography>
                    <Typography variant="subtitle2">{tarifaJuego}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Socialización con otras mascotas:{' '}
                    </Typography>
                    <Typography variant="subtitle2">{tarifaSocial}</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

              {/* Condiciones de paseo */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Perros permitidos
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>
                  Tamaño
                </Typography>
                <PerrosPermitidos perrosAceptados={perrosAceptados} />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Agenda de paseos */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AgendaPaseos />
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  const res = await fetch(GET_PASEADOR_ID(params.paseadorId), {
    agent
  });

  const paseador = await res.json();

  return {
    props: {
      paseador
    }
  };
}

export async function getStaticPaths() {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  const res = await fetch(GET_ALL_PASEADORES, {
    agent
  });

  const paseadores = await res.json();

  const paths = paseadores.map((paseador) => ({
    params: { paseadorId: paseador.id.toString() }
  }));

  return { paths, fallback: false };
}
export default AgendarPaseoPage;
