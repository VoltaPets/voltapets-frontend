// Librerías
// MUI
import { Box, Button, Grid, Typography } from '@mui/material';

// Relative Imports
import ServiciosDisplay from './ServiciosDisplay';

const servicios = [
  {
    servicio: 'Veterinaria 24 Horas',
    telefono: '+569 1234 5678',
    autor: 'Dr. Juan Perez',
    direccion: 'Av. Siempre Viva 123',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris.',
    image: 'https://noticias.unab.cl/wp-content/uploads/2021/10/medicina-veterinaria-unab.jpg'
  },
  {
    servicio: 'Tienda de Mascotas EVI',
    telefono: '+569 1234 5678',
    autor: 'Marta Solis',
    direccion: 'Av. Alameda 123',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris.',
    image: 'https://i.pinimg.com/originals/3f/49/4a/3f494a695121627f4538a6ffcd97d66e.png'
  },
  {
    servicio: 'Consultorio Veterinario',
    telefono: '+569 1234 5678',
    autor: 'Alan Orellana',
    direccion: 'Av. San Martin 123',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris.',
    image:
      'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/Equipo-Clinica-Veterinaria-Ejea-1-480x300.jpeg'
  },
  {
    servicio: 'Veterinaria 24 Horas',
    telefono: '+569 1234 5678',
    autor: 'Dr. Juan Perez',
    direccion: 'Av. Siempre Viva 123',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris.',
    image: 'https://noticias.unab.cl/wp-content/uploads/2021/10/medicina-veterinaria-unab.jpg'
  },
  {
    servicio: 'Tienda de Mascotas EVI',
    telefono: '+569 1234 5678',
    autor: 'Marta Solis',
    direccion: 'Av. Alameda 123',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris.',
    image: 'https://i.pinimg.com/originals/3f/49/4a/3f494a695121627f4538a6ffcd97d66e.png'
  },
  {
    servicio: 'Consultorio Veterinario',
    telefono: '+569 1234 5678',
    autor: 'Alan Orellana',
    direccion: 'Av. San Martin 123',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nunc vel mauris.',
    image:
      'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/Equipo-Clinica-Veterinaria-Ejea-1-480x300.jpeg'
  }
];

const HomeOtrosServicios = () => {
  return (
    <Grid container py={2}>
      <Grid item xs={12} my={4}>
        <Typography variant="h4" align="center">
          Mascotas Perdidas
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
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start'
          }}
        >
          <Grid container spacing={4} sx={{ justifyContent: 'center', width: '100%' }}>
            {servicios.map((servicio, index) => (
              <ServiciosDisplay key={index} {...servicio} />
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeOtrosServicios;
