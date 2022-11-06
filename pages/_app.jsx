// Libraries
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

// MUI
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

// Relative Imports
import { voltaPetsTheme } from '../styles/brandPalette';
import createEmotionCache from '../src/utils/createEmotionCache';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <Head>
        <link rel="brand-favicon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={voltaPetsTheme}>
          <CssBaseline />
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
