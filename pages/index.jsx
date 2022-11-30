// Libraries

// MUI
import { Box, CardMedia, List, ListItem, Grid, Typography } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import {
  HomeHero,
  HomeServicios,
  HomeFuncionamiento,
  HomeOtrosServicios
} from '../src/components/screens/public/home/';

export default function HomePage() {
  return (
    <Layout authRequired={false} title="Volta Pets">
      <Grid container sx={{ maxWidth: '100%', mx: 'auto' }}>
        <Grid item xs={12}>
          <HomeHero />
        </Grid>
        <Grid item xs={12}>
          <HomeServicios />
        </Grid>
        <Grid item xs={12} mb={8}>
          <HomeFuncionamiento />
        </Grid>
        {/* <Grid item xs={12}>
          <HomeOtrosServicios />
        </Grid> */}
      </Grid>
    </Layout>
  );
}
