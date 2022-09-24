// Librerias

// MUI
import { Box, Card, Grid, Typography, CardMedia } from '@mui/material';

const ServiciosBeneficios = ({ beneficios }) => {
  return (
    <Box p={4}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, width: '100%' }}>
        Beneficios
      </Typography>
      <Typography variant="subtitle1" component="p">
        En Volta Pets podrás encontrar a un paseador para que cuide de tu perro mientras estás fuera
        de casa o si tienes un compromiso. Además, podrás conocer a otros tutores y sus perros.
      </Typography>
      <Grid container sx={{ mt: 4, gap: 4 }}>
        {beneficios.map((beneficio) => (
          <Grid item xs={12} md key={beneficio.id}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                bgcolor: '#f5f5f5',
                borderRadius: 4
              }}
            >
              <CardMedia
                component="img"
                image={beneficio.img}
                alt={beneficio.title}
                sx={{ width: '100%', height: 200 }}
                onError={(e) => {
                  e.currentTarget.src = '/logo.jpg';
                  e.currentTarget.onerror = null;
                }}
              />
              <Box px={4} pb={4}>
                <Typography variant="h6" color="info.main" component="h3">
                  {beneficio.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {beneficio.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiciosBeneficios;
