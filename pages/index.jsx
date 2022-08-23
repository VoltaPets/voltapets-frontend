// Libraries

// MUI
import { Box, CardMedia, List, ListItem, Grid, Typography } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';
import { HomeHero, HomeCard } from '../src/components/screens/public/home/';

export default function Home() {
  return (
    <Layout authRequired={false} publicPage title="Volta Pets">
      <Grid container>
        <Grid item xs={12}>
          <HomeHero />
        </Grid>
        <Grid item xs={12}>
          <HomeCard />
        </Grid>
      </Grid>
    </Layout>
  );
}
