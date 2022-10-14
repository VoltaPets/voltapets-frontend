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
  { name: 'Nuestros servicios', href: '/nuestros-servicios' },
  { name: 'Adopción', href: '/adopcion' },
  { name: 'Mascotas perdidas', href: '/mascotas-perdidas' }
];

const linksArrayMobile = [
  { name: 'Nuestros servicios', href: '/nuestros-servicios' },
  { name: 'Adopción', href: '/adopcion' },
  { name: 'Mascotas perdidas', href: '/mascotas-perdidas' },
  { name: 'Quiero ser Paseador', href: '/paseador/info' }
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

  // Handle scroll position to change header color and shadow effect on scroll down and up respectively
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <>
      <AppBar
        id="header"
        elevation={0}
        sx={{
          position: 'sticky',
          display: 'flex',
          top: 0,
          maxWidth: { xs: '100%', lg: 1300 },
          borderRadius: { xs: 0, lg: 2 },
          bgcolor: '#fff',
          border: { xs: 0, md: 1 },
          borderColor: { xs: 'transparent', md: 'divider' }
        }}
      >
        <Toolbar sx={{ bgcolor: '#fff', px: '0 !important', pr: 1 }}>
          <Link component="a" href="/">
            <Box sx={{ width: 150, height: 65 }}>
              <CardMedia
                image="/logo.jpg"
                alt="Logo empresa"
                component="img"
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="secondary" sx={{ mr: 4 }}>
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
                <MenuItem key={index} onClick={() => push(`/${link.href}`)}>
                  <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                    {link.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Grid container sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Grid
              item
              xs
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.8rem' }}
            >
              {linksArray.map((link, index) => (
                <HeaderLink key={index} href={link.href}>
                  {link.name}
                </HeaderLink>
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
              <HeaderLink href="/paseador/paseador">Quiero ser un paseador</HeaderLink>
              <Button
                onClick={() => push('usuarios/login')}
                color="secondary"
                variant="contained"
                sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
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
