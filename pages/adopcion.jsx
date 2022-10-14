// Librerias
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//MUI
import TuneIcon from '@mui/icons-material/Tune';
import { Typography, Box, Card, Chip, Grid, Button } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import Filtros from '../src/components/screens/public/home/adopcion/Filtros';
import AdopcionCard from '../src/components/commons/mascotas/MascotaCard';
import { adopcion } from '../src/mock/mascotas';

function AdopcionMascotasPage() {
  // States
  const [openFilter, setOpenFilter] = useState(false);

  // Hooks
  const { query, isReady, replace } = useRouter();

  return (
    <Layout authRequired={false} publicPage title="Adopción de mascotas">
      <Filtros open={openFilter} setOpen={setOpenFilter} />
      <Box sx={{ maxWidth: { xs: '100%', lg: 1300 }, mx: 'auto' }}>
        <Box
          component="header"
          sx={{
            pt: 4,
            pb: 1,
            textAlign: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography variant="h4" color="info.main" gutterBottom>
              Adopción de mascotas
            </Typography>
          </Box>

          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              py: 1,
              px: 2,
              borderRadius: 8,
              bgcolor: '#e3e3e3'
            }}
          >
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Button
                variant="text"
                onClick={() => replace('/adopcion?region=1&tipo=1')}
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'inherit',
                  textDecoration: 'underline',
                  color: '#fff'
                }}
              >
                Perros
              </Button>
              <Button
                variant="text"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'inherit',
                  textDecoration: 'underline',
                  color: '#fff'
                }}
                onClick={() => replace('/adopcion?region=1&tipo=2')}
              >
                Gatos
              </Button>
            </Box>

            <Chip
              size="large"
              clickable
              variant="contained"
              color="secondary"
              label="Filtros"
              icon={<TuneIcon />}
              sx={{ fontWeight: 'bold' }}
              onClick={() => {
                setOpenFilter(true);
              }}
            />
          </Card>
        </Box>

        <Grid container p={2}>
          {/* Cartas */}
          <Grid
            item
            xs={12}
            md
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'start',
              bgcolor: '#e3e4e5',
              borderRadius: 4,
              mb: 4,
              p: 2,
              gap: 2
            }}
            component="section"
          >
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: adopcion.length > 4 ? 'start' : 'center' }}
            >
              {adopcion.map((mascotaAdopcion) => (
                <AdopcionCard isAdopcion key={mascotaAdopcion.id} mascota={mascotaAdopcion} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
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
