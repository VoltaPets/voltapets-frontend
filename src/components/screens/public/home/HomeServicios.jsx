// Librerías
import { useRouter } from 'next/router';
// MUI
import { Box, Button, Card, Grid, Typography, CardMedia } from '@mui/material';

// Relative imports
import ServiciosCard from './ServiciosCard';

const HomeServicios = () => {
  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleOnClick = () => {
    push('/registro/tutor');
  };

  return (
    <Grid container p={4}>
      <Grid item xs={12} mt={8} mb={6}>
        <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
          Servicios para tu amigo peludo
        </Typography>
      </Grid>

      {/* Servicios */}
      <Grid item xs={7}>
        <Grid container spacing={2}>
          <Grid item xs={12} mb={6}>
            <Typography variant="h6" align="justify" sx={{ fontWeight: 'bold', mb: 2 }}>
              Servicio Básico
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <ServiciosCard
                img="https://business.nextdoor.com/hubfs/Dog%20Walker%20Salary.jpg"
                subtitulo="Paseo de necesidades básicas"
                descripcionUno=" Pasear a tu perro es un aspecto importante de sus cuidados, en especial si estamos
                hablando de un animal de raza grande y convive contigo y con tu familia en un
                departamento pequeño."
                descripcionDos="Llevar de paseo a tu mascota varias veces al día por algunos minutos, es mucho más que
                una necesidad higiénica."
              />
            </Box>
          </Grid>

          {/* Servicios de Bienestar Integral */}
          <Grid item xs={12}>
            <Typography variant="h6" align="justify" sx={{ fontWeight: 'bold', mb: 2 }}>
              Servicios de Bienestar Integral
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <ServiciosCard
                singleParagraph
                img="https://fox5sandiego.com/wp-content/uploads/sites/15/2022/07/Carlsbad-dog-park-072822-copy-e1659016132684.jpg?strip=1"
                subtitulo="Recreación y juego"
                descripcionUno="El juego en el perro forma parte de su bienestar físico y emocional. Por una parte, porque se trata de un animal social que necesita jugar para despertar sus habilidades. Por otro lado, porque es jugando como el perro crea un vínculo de pertenencia con su dueño."
              />
              <ServiciosCard
                singleParagraph
                img="https://s28489.pcdn.co/wp-content/uploads/2021/04/Dog-park-2-May-16.jpg.optimal.jpg"
                subtitulo="Socialización"
                descripcionUno="El objetivo principal de la socialización es ayudar a tu cachorro a que se acostumbre a todo tipo de formas, sonidos y olores de una manera positiva. Una socialización adecuada puede evitar los miedos más comunes y le ayudará a convertirse en un compañero equilibrado, educado y feliz."
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          variant="outlined"
          sx={{ width: '100%', height: 'fit-content', position: 'sticky', top: 20 }}
        >
          <Box sx={{ p: 2, bgcolor: '#E4E5E6' }}>
            <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
              ¿Quieres saber más?
            </Typography>
          </Box>
          <Box sx={{ p: 2, pl: 6 }}>
            <Typography variant="body2" align="left" sx={{ mb: 2 }}>
              Podrás agendar paseos personalizados para tu perro
            </Typography>
            <Typography variant="body2" align="left" sx={{ mb: 2 }}>
              Nuestros paseadores deben pasar una entrevista
            </Typography>
            <Typography variant="body2" align="left" sx={{ mb: 2 }}>
              Podrás encontrar información relevante de cada paseador
            </Typography>
            <Typography variant="body2" align="left">
              Tu perro tendrá un perfil personalizado
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              color="info"
              onClick={handleOnClick}
              sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
            >
              Registrarse
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeServicios;
