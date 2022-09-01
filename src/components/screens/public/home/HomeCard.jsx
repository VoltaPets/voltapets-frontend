import { Box, Button, Grid, Typography } from '@mui/material';

const HomeCard = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Welcome</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeCard;
