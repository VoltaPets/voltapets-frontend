// Librerías
// MUI
import { Box, Button, Grid, Typography } from '@mui/material';

// Relative imports
import ServiciosCard from './ServiciosCard';

const HomeServicios = () => {
  return (
    <Grid container py={4}>
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
          px: { xs: 0, md: 4 }
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
            <Typography variant="h5">Servicio Básico</Typography>
          </Box>
          <Grid container sx={{ justifyContent: 'center' }}>
            <ServiciosCard
              titulo="Paseo de necesidades básicas"
              descripcion="Pasear a tu perro es un aspecto importante de sus cuidados, en especial si estamos hablando de un animal de raza grande y convive contigo y con tu familia en un departamento pequeño. Llevar de paseo a tu mascota varias veces al día por algunos minutos, es mucho más que una necesidad higiénica."
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
              descripcion="El juego en el perro forma parte de su bienestar físico y emocional. Por una parte, porque se trata de un animal social que necesita jugar para despertar sus habilidades. Por otro lado, porque es jugando como el perro crea un vínculo de pertenencia con su dueño."
              image="https://fox5sandiego.com/wp-content/uploads/sites/15/2022/07/Carlsbad-dog-park-072822-copy-e1659016132684.jpg?strip=1"
            />
            <ServiciosCard
              width={6}
              titulo="Socialización"
              descripcion="El objetivo principal de la socialización es ayudar a tu cachorro a que se acostumbre a todo tipo de formas, sonidos y olores de una manera positiva. Una socialización adecuada puede evitar los miedos más comunes y le ayudará a convertirse en un compañero equilibrado, educado y feliz."
              image="https://s28489.pcdn.co/wp-content/uploads/2021/04/Dog-park-2-May-16.jpg.optimal.jpg"
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeServicios;
