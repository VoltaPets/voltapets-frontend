// MUI
import RegisterIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/TravelExplore';
import BookIcon from '@mui/icons-material/Book';
import PetsIcon from '@mui/icons-material/Pets';
import { Grid, Box, Typography } from '@mui/material';

// Relative imports
import Pasos from './Pasos';

const HomeFuncionamiento = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, mt: 8 }}
      >
        <Typography variant="h4" gutterBottom sx={{ width: '100%', textAlign: 'center' }}>
          ¿Cómo funciona?
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ width: '40%', fontWeight: 'bold', textAlign: 'center', mb: 2 }}
        >
          Volta Pets es una plataforma que conecta a los dueños de mascotas con los mejores
          cuidadores de mascotas.
        </Typography>
      </Grid>

      {/* Pasos */}
      <Grid item xs={12} mb={8} p={2}>
        <Box sx={{ display: 'flex', px: 6, gap: 2 }}>
          <Pasos
            Icono={<RegisterIcon sx={{ fontSize: 50, color: 'info.main' }} />}
            titulo="Regístrate"
            color="info.main"
            desc="Al registrarte podrás crear tu perfil, el de tus mascotas y publicar tus anuncios."
          />
          <Pasos
            Icono={<SearchIcon sx={{ fontSize: 50, color: 'secondary.main' }} />}
            titulo="Busca a un paseador"
            color="secondary.main"
            desc="Elige al paseador que más se adecue a tus necesidades y a las de tu mascota."
          />
          <Pasos
            Icono={<BookIcon sx={{ fontSize: 50, color: 'warning.main' }} />}
            color="warning.main"
            titulo="Agenda tu paseo"
            desc="Te simplificamos el proceso de agendar paseos, para que encuentres el mejor horario y el mejor paseador"
          />
          <Pasos
            Icono={<PetsIcon sx={{ fontSize: 50, color: 'primary.main' }} />}
            color="primary.main"
            titulo="Relájate"
            desc="Tus mascotas están en buenas manos con los mejores cuidadores de mascotas."
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeFuncionamiento;
