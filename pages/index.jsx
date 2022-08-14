// Libraries

// MUI
import { Box } from '@mui/material';

// Relative imports
import Layout from '../src/components/commons/Layout';

export default function Home() {
  return (
    <Layout authRequired={false} publicPage title="Volta Pets">
      <Box>Body</Box>
    </Layout>
  );
}
