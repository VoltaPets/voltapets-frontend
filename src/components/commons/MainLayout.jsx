// Libraries
import Head from 'next/header';

// MUI
import { Grid, Box, Typography } from '@mui/material';

// Relative imports
import Header from '../commons/Header';

const MainLayout = ({ title, description, children }) => {
  return (
    <Grid container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
