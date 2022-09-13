// Libraries
import { useState } from 'react';
import { useRouter } from 'next/router';

// MUI
import {
  AppBar,
  Box,
  IconButton,
  Button,
  CardMedia,
  Container,
  Menu,
  MenuItem,
  Grid,
  Link,
  Toolbar,
  styled,
  Typography
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

const linksArray = [
  { name: 'Nuestros servicios', href: '/servicios' },
  { name: 'Adopción', href: '/adopcion' },
  { name: 'Mascotas perdidas', href: '/mascotas-perdidas' }
];

const linksArrayMobile = [
  { name: 'Nuestros servicios', href: '/servicios' },
  { name: 'Adopción', href: '/adopcion' },
  { name: 'Mascotas perdidas', href: '/mascotas-perdidas' },
  { name: 'Quiero ser un Paseador' }
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
  // Estados
  const [anchorElNav, setAnchorElNav] = useState(null);

  // Hooks
  const { push } = useRouter();

  // Funciones
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ display: 'flex', top: 0 }}>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#fff' }}>
          <Link component="a" href="/">
            <Box sx={{ width: 150, height: 80 }}>
              <CardMedia
                image="/logo.jpg"
                alt="Logo empresa"
                component="img"
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Link>
          <Container
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}
          >
            <IconButton size="large" onClick={handleOpenNavMenu} color="secondary">
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {linksArrayMobile.map((link, index) => (
                <MenuItem key={index} onClick={() => push(`/${link.name}`)}>
                  <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                    {link.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Container>
          <Grid container sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Grid
              item
              xs
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.8rem', px: 2 }}
            >
              {linksArray.map((link, index) => (
                <HeaderLink key={index}>{link.name}</HeaderLink>
              ))}
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                gap: 2,
                textAlign: 'center',
                fontSize: '0.8rem'
              }}
            >
              <HeaderLink href="/registro/paseador">Quiero ser un paseador</HeaderLink>
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
