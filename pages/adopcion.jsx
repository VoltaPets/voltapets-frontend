// Librerias
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//MUI
import TuneIcon from '@mui/icons-material/Tune';
import { Typography, Box, Card, Grid, Button } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import Filtros from '../src/components/screens/public/home/adopcion/Filtros';
import AdopcionCard from '../src/components/screens/public/home/adopcion/AdopcionCard';
import { adopcion } from '../src/mock/adopcionData';

function AdopcionMascotasPage() {
  // States
  const [openFilter, setOpenFilter] = useState(false);

  // Hooks
  const { query, isReady } = useRouter();

  return (
    <Layout authRequired={false} publicPage title="Adopción de mascotas">
      <Filtros open={openFilter} setOpen={setOpenFilter}/>
      <Box
        component="header"
        sx={{
          pt: 4,
          pb: 1,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4">Adopción de mascotas</Typography>
        </Box>

        <Box sx={{ flex: 0.2 }}>
          <Button
            onClick={() => {console.log("click"); setOpenFilter(true)}}
            sx={{ textTransform: 'inherit' }}
            startIcon={<TuneIcon />}
            variant="contained"
            size="large"
            color="secondary"
          >
            Filtros
          </Button>
        </Box>
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
            p: 2,
            gap: 2
          }}
          component="section"
        >
          <Grid container spacing={1}>
            {adopcion.map((mascota) => (
              <AdopcionCard key={mascota.id} {...mascota} />
            ))}
          </Grid>
        </Grid>
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
