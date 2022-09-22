// Libraries
import Head from 'next/head';

// MUI
import { Box } from '@mui/material';

// Relative Imports
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  authRequired = false,
  children,
  description,
  publicPage = false,
  title = 'Volta Pets',
  nextPage
}) => {
  return (
    <Box sx={{ maxwidth: '100vw' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Header />
        <Box sx={{ flex: 1, width: '100%' }}>{children}</Box>

        {/* <Footer /> */}
        <Box sx={{ width: '100%' }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
