// Libraries

// MUI
import { Box, Typography } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';

export default function Home() {
  return (
    <Layout authRequired={false} publicPage title="Volta Pets">
      <Box sx={{ p: 2, border: 1, borderRadius: 2, mx: 'auto', my: 'auto' }}>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="h4">H4</Typography>
        <Typography variant="h5">H5</Typography>
        <Typography variant="h6">H6</Typography>
      </Box>
    </Layout>
  );
}
