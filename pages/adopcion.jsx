// Librerias
import { useRouter } from 'next/router';

//MUI
import { Typography, Box, Card, Grid } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import Filtros from '../src/components/screens/public/home/adopcion/Filtros';

function AdopcionMascotasPage() {
  // Hooks
  const { query, isReady } = useRouter();

  return (
    <Layout authRequired={false} publicPage title="Adopción de mascotas">
      <Box component="header" sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4">Adopción de mascotas</Typography>
      </Box>

      <Grid container sx={{ border: 2, borderColor: 'green' }}>
        {/* Filtro */}
        <Grid item xs={12} md={3.5} component="aside" p={2}>
          <Box component="header" sx={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Filtros de búsqueda
            </Typography>
          </Box>
          <Card variant="outlined" sx={{ p: 2, borderRadius: 4 }}>
            <Filtros />
          </Card>
        </Grid>

        {/* Cartas */}
        <Grid
          item
          xs={12}
          md
          sx={{
            border: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          component="section"
        ></Grid>
      </Grid>
    </Layout>
  );
}

export const getFormattedParams = (query) => ({
  ...(query.region && { region: query.region }),
  ...(query.comuna && { comuna: query.comuna }),
  ...(query.tipo && { tipo: query.tipo }),
  ...(query.raza && { raza: query.raza }),
  ...(query.tamaño && { tamaño: query.tamaño }),
  ...(query.grupoEtario && { grupoEtario: query.grupoEtario }),
  ...(query.sexo && { sexo: query.sexo })
});

export default AdopcionMascotasPage;
