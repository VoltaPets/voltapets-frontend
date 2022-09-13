// Librerías
// MUI
import { Box, Button, Grid, Typography } from '@mui/material';

// Relative imports
import ServiciosCard from './ServiciosCard';

const HomeServicios = () => {
  return (
    <Grid container py={2}>
      <Grid item xs={12} my={4}>
        <Typography variant="h4" align="center">
          Servicio de Paseo
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          px: 4
        }}
      >
        <Box
          sx={{
            flex: 0.35,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start'
          }}
        >
          <Box component="header" mb={2}>
            <Typography variant="h5">Servicios de Bienestar Integral</Typography>
          </Box>
          <Grid container sx={{ justifyContent: 'center' }}>
            <ServiciosCard
              titulo="Paseo de necesidades básicas"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus est in hendrerit ultricies. Duis sed porta purus, ac varius mauris."
              image="https://business.nextdoor.com/hubfs/Dog%20Walker%20Salary.jpg"
            />
          </Grid>
        </Box>

        <Box
          sx={{
            flex: 0.65,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start'
          }}
        >
          <Box component="header" mb={2}>
            <Typography variant="h5">Servicios de Bienestar Integral</Typography>
          </Box>
          <Grid container spacing={2}>
            <ServiciosCard
              width={6}
              titulo="Recreación y juego"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus est in hendrerit ultricies. Duis sed porta purus, ac varius mauris."
              image="https://fox5sandiego.com/wp-content/uploads/sites/15/2022/07/Carlsbad-dog-park-072822-copy-e1659016132684.jpg?strip=1"
            />
            <ServiciosCard
              width={6}
              titulo="Socialización con otras mascotas"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus est in hendrerit ultricies. Duis sed porta purus, ac varius mauris."
              image="https://s28489.pcdn.co/wp-content/uploads/2021/04/Dog-park-2-May-16.jpg.optimal.jpg"
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeServicios;
