// Libraries
// MUI
import { CardMedia, Grid, Box, Typography } from '@mui/material';

// Relative imports
import LoginForm from '../../src/components/commons/RegisterForm';

function LoginPage() {
  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Image */}
      <Grid
        item
        xs={3.5}
        sx={{ border: 1, display: 'flex', justifyContent: 'center', alignItems: 'start' }}
      >
        <Box sx={{ width: '50%' }}>
          <CardMedia
            image="/images/logo.png"
            alt="Volta Pets Logo"
            component="img"
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>
      </Grid>

      {/* Form */}
      <Grid item xs={5} sx={{ border: 1 }}></Grid>

      {/* Errors */}
      <Grid item xs={3.5} sx={{ border: 1 }}>
        C
      </Grid>
    </Grid>
  );
}

export default LoginPage;
