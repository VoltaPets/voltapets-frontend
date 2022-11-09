// Librerías
import React from 'react';
import Head from 'next/head';

// MUI
import { Box, Card, CardMedia, Grid, Typography, Button } from '@mui/material';

// Relative imports
import Link from '../../../../../src/components/commons/Link';

const LayoutRegistro = ({ titulo, children }) => {
  return (
    <>
      <Head>
        <title>{`${titulo} - Volta Pets`}</title>
      </Head>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            backgroundImage: 'url(/images/dog-walk-couple.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '80%',
            backgroundPosition: 'center'
          }}
        >
          {/* Logo */}
          <Link href="/" sx={{ alignSelf: 'start', display: { xs: 'none', sm: 'block' } }}>
            <CardMedia
              component="img"
              image="/logo.jpg"
              sx={{
                display: { xs: 'none', sm: 'block' },
                width: { xs: 120, sm: 150 },
                alignSelf: 'start',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Contenedor */}
          <Box
            sx={{
              my: { xs: 0, sm: 4 },
              width: '100%',
              maxWidth: 1200,
              flex: 1,
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              alignItems: { xs: 'center', md: 'start' },
              justifyContent: 'center',
              px: { xs: 2, sm: 4 },
              gap: 2
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutRegistro;
