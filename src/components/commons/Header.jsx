import Image from 'next/image';
import { AppBar, Box, Button, CardMedia, Grid, Toolbar } from '@mui/material';
import Link from '../commons/Link';

const linksArray = [
  { name: 'Nuestros servicios' },
  { name: 'Otros servicios' },
  { name: 'Adopción' },
  { name: 'Mascotas perdidas' }
];

const Header = () => {
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ display: { xs: 'none', md: 'flex' }, height: 64 }}
      >
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Grid container>
            <Grid xs={2}>
              <Link href="/">
                <Box sx={{ width: 150, height: 60 }}>
                  <CardMedia
                    image="/logo4.jpg"
                    alt="Logo empresa"
                    component="img"
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid xs sx={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem' }}>
              {linksArray.map((link, index) => (
                <Link
                  sx={{
                    pb: 0.5,
                    borderBottom: 2,
                    transition: '0.5s',
                    borderColor: '#fff8ee',
                    '&:hover': { borderColor: '#c1554c' }
                  }}
                  key={index}
                  underline="none"
                  variant="plain"
                  color="text"
                >
                  {link.name}
                </Link>
              ))}
            </Grid>
            <Grid
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
                fontSize: '0.8rem'
              }}
            >
              <Link
                href="/"
                underline="none"
                variant="plain"
                sx={{
                  pb: 0.5,
                  borderBottom: 2,
                  transition: '0.5s',
                  borderColor: '#fff',
                  '&:hover': { borderColor: '#000' }
                }}
              >
                Quiero ser un paseador
              </Link>
              <Link
                href="/"
                underline="none"
                variant="plain"
                sx={{
                  pb: 0.5,
                  borderBottom: 2,
                  transition: '0.5s',
                  borderColor: '#fff',
                  '&:hover': { borderColor: '#000' }
                }}
              >
                Publicitar mi local
              </Link>
              <Button color="secondary" variant="contained" sx={{ textTransform: 'inherit' }}>
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
