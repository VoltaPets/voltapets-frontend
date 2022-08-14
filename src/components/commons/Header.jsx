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
        sx={{ display: { xs: 'none', md: 'flex' }, height: 64, bgcolor: '#fff' }}
      >
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Grid container>
            <Grid xs={2}>
              <Link href="/">
                <Box sx={{ width: 150, height: 64 }}>
                  <CardMedia
                    image="/logo2.png"
                    alt="Logo empresa"
                    component="img"
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid xs sx={{ border: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
              {linksArray.map((link, index) => (
                <Link
                  sx={{
                    pb: 1,
                    borderBottom: 2,
                    transition: '0.5s',
                    borderColor: '#fff',
                    '&:hover': { borderColor: '#000' }
                  }}
                  key={index}
                  underline="none"
                  variant="plain"
                >
                  {link.name}
                </Link>
              ))}
            </Grid>
            <Grid xs={2} sx={{ border: 1 }}>
              <Box sx={{ bgcolor: 'red', width: 20, height: '100%' }}>C</Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
