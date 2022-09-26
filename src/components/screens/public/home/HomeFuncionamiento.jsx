import { Grid, Card, Box, Typography, CardMedia } from '@mui/material';

const steps = [
  {
    title: 'Paso 1',
    image: '/images/dog-walk.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    title: 'Paso 2',
    image: '/images/dog-walk.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    title: 'Paso 3',
    image: '/images/dog-walk.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    title: 'Paso 4',
    image: '/images/dog-walk.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    title: 'Paso 5',
    image: '/images/dog-walk.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    title: 'Paso 6',
    image: '/images/dog-walk.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  }
];

const HomeFuncionamiento = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            px: { xs: 2, md: 4 },
            py: 4
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            ¿Cómo funciona?
          </Typography>
          <Typography variant="subtitle1" component="h5" gutterBottom>
            Volta Pets es una plataforma que conecta a los dueños de mascotas con los mejores
            cuidadores de mascotas.
          </Typography>
          <Grid container spacing={2} mt={1}>
            {steps.map((step) => (
              <Grid item xs={12} md={4}>
                <Card
                  elevation={2}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    gap: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { borderColor: 'info.main' }
                  }}
                >
                  <Box
                    sx={{
                      flex: 0.5,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="/images/dog-walk.jpg"
                      alt={step.title}
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        width: '100%',
                        height: '50%',
                        objectFit: 'contain'
                      }}
                    />
                    <Typography variant="h6" component="h3" align="center" gutterBottom>
                      {step.title}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" component="p" gutterBottom>
                      {step.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeFuncionamiento;
