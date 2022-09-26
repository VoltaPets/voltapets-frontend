// Librerias
import { useRouter } from 'next/router';

// MUI
import { Grid, Box, Typography, Button, CardMedia } from '@mui/material';

const ServiciosInformacion = ({ paseador = false, img = '/images/dog-walk.jpg' }) => {
  // Hooks
  const { push } = useRouter();

  // Functions
  const handleRedirection = () => {
    push(paseador ? '/paseador/info' : '/registro/tutor');
  };

  return (
    <Box>
      <Grid
        container
        sx={{
          flexDirection: {
            xs: 'column-reverse',
            md: paseador ? 'row' : 'row-reverse'
          }
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              width: { md: '85%', lg: '70%' },
              p: 4,
              gap: 4
            }}
          >
            <Box>
              <Typography variant="h4" align="left" component="h2" sx={{ mb: 2, width: '100%' }}>
                {paseador ? 'Paseador' : 'Tutor'}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {paseador
                  ? 'Como paseador podrás pasear a los perros y darles el cariño y atención que necesitan. Además, podrás ganar dinero extra mientras disfrutas de la compañía de los perros.'
                  : 'Como tutor podrás crear un perfil para cada uno de tus perros y encontrar a un paseador para que lo cuide mientras estás fuera de casa o si tienes un compromiso. Además, podrás conocer a otros tutores y sus perros.'}
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="info"
              onClick={handleRedirection}
              sx={{ textTransform: 'none', width: { xs: '100%', md: '60%' } }}
            >
              {paseador ? 'Saber más' : 'Registrarme'}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <CardMedia
              component="img"
              image={img}
              alt={paseador ? 'Tutor de mascotas' : 'Paseador de perros'}
              sx={{ height: { xs: 360, md: 560 }, objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = '/images/dog-walk.jpg';
                e.currentTarget.onerror = null;
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiciosInformacion;
