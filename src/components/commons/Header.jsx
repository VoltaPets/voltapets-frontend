// Libraries
import { useRouter } from 'next/router';

// MUI
import { AppBar, Box, Button, CardMedia, Grid, Link, Toolbar, styled } from '@mui/material';

const linksArray = [
  { name: 'Nuestros servicios' },
  { name: 'Adopción' },
  { name: 'Mascotas perdidas' }
];

const HeaderLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  transition: '0.4s',
  padding: theme.spacing(1),
  fontSize: '0.9rem',
  fontWeight: 600,
  '&:hover': {
    cursor: 'pointer',
    color: theme.palette.primary.dark
  }
}));

const Header = () => {
  const { push } = useRouter();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ display: { xs: 'none', md: 'flex' }, height: 64, top: 0 }}
      >
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#fff' }}>
          <Grid container>
            <Grid xs={2}>
              <Link href="/">
                <Box sx={{ width: 150, height: 65 }}>
                  <CardMedia
                    image="/logo.png"
                    alt="Logo empresa"
                    component="img"
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid xs sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.8rem' }}>
              {linksArray.map((link, index) => (
                <HeaderLink>{link.name}</HeaderLink>
              ))}
            </Grid>
            <Grid
              xs={5}
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
                fontSize: '0.8rem'
              }}
            >
              <HeaderLink>Quiero ser un paseador</HeaderLink>
              <HeaderLink>Publicitar mi local</HeaderLink>
              <Button
                onClick={() => push('usuarios/login')}
                color="secondary"
                variant="contained"
                sx={{ textTransform: 'inherit' }}
              >
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
