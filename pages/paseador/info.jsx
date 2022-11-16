// Librerías
import { useRouter } from 'next/router';

// MUI
import { Grid, Box, Button, Card, CardMedia, Typography } from '@mui/material';

// Relative Imports
import Layout from '../../src/components/commons/Layout';
import {
  paseadorImg,
  requisitos
} from '../../src/components/screens/public/home/paseador-info/paseadorData';

const InfoPaseadorPage = () => {
  // Hooks
  const { push } = useRouter();

  return (
    <Layout
      description="Página de información para aquellas personas que quiere ser paseador"
      authRequired={false}
      title="Información de Paseador"
    >
      {
        <Grid container sx={{ maxWidth: { xs: '100%', lg: 1300 }, mx: 'auto' }}>
          {/* Hero image */}
          <Grid item x={12}>
            {/* Hero Image */}
            <Box sx={{ position: 'relative', height: { xs: 500, md: 600, lg: 700 } }}>
              <CardMedia
                component="img"
                sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                image="/images/paseador/paseador-hero.jpg"
                alt="Paseador"
              />
              <Box
                sx={{
                  flex: 1,
                  bgcolor: 'primary.main',
                  position: 'absolute',
                  width: { sm: '50%', lg: '40%' },
                  height: '100%',
                  top: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    ¿Quieres ser paseador?
                  </Typography>

                  <Typography variant="subtitle2" paragraph sx={{ mb: 2, fontSize: '1em' }}>
                    Únete a nuestra comunidad de paseadores y empieza a ganar dinero paseando a los
                    perros de nuestra comunidad.
                  </Typography>

                  <Typography variant="subtitle2" sx={{ fontSize: '1em' }}>
                    ¡Es muy fácil! Solo debes crearte una cuenta y el resto lo hacemos nosotros. Te
                    contactaremos para que nos cuentes un poco más sobre ti y tu experiencia, y de
                    esta forma poder asegurar que eres la persona indicada para cuidar a nuestros
                    amigos peludos.
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      py: 6
                    }}
                  >
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ fontWeight: 'bold', textTransform: 'inherit', width: '50%' }}
                      onClick={() => push('/registro/paseador')}
                    >
                      Anímate
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Imágenes */}
          <Grid item xs={12} mb={4}>
            <Box sx={{ p: 4 }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ textAlign: 'center', fontWeight: 'bold', my: 8 }}
              >
                Brinda un servicio de calidad, <br /> con seguridad y confianza.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                {paseadorImg.map((item, index) => (
                  <Card elevation={4} key={index} sx={{ flex: 1, borderRadius: 4 }}>
                    <CardMedia
                      component="img"
                      sx={{
                        height: { xs: 200, md: index === 1 ? 390 : 350 },
                        width: '100%',
                        objectFit: 'cover'
                      }}
                      image={item.img}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.src = '/images/paw.png';
                        e.target.onerror = null;
                      }}
                    />
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ bgcolor: 'info.main', color: 'white', py: 8, textAlign: 'center' }}
          >
            <Box sx={{ p: 4 }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ textAlign: 'center', fontWeight: 'bold', mt: 8, mb: 4 }}
              >
                ¿Qué necesitas para ser paseador?
              </Typography>

              <Typography variant="subtitle2" sx={{ textAlign: 'center', fontSize: '1em', mb: 8 }}>
                Para ser paseador de perros en <strong>Volta Pets</strong>, solo necesitas
                <br /> los siguientes requisitos:
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 2
                }}
              >
                {requisitos.map((item, index) => (
                  <Card
                    elevation={4}
                    key={index}
                    sx={{
                      p: 2,
                      flex: 1,
                      borderRadius: 4,
                      textAlign: 'justify',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        backgroundColor: 'info.dark',
                        color: 'white'
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                      {item.title}
                    </Typography>

                    <Typography variant="body2">{item.description}</Typography>
                  </Card>
                ))}
              </Box>
            </Box>

            <Box sx={{ py: 8 }}>
              <Button
                variant="contained"
                color="warning"
                size="large"
                onClick={() => push('/registro/paseador')}
                sx={{
                  textTransform: 'inherit',
                  fontWeight: 'bold',
                  color: 'white',
                  width: { xs: '80%', md: '20%' },
                  fontSize: '1.2em'
                }}
              >
                Regístrate
              </Button>
            </Box>
          </Grid>
        </Grid>
      }
    </Layout>
  );
};

export default InfoPaseadorPage;
