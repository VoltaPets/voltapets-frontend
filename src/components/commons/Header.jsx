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
  Avatar,
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

// Relative Imports
import PerfilAvatar from '../screens/private/tutor/navbar/PerfilAvatar';

const linksArray = [
  { name: 'Nuestros servicios', href: '/nuestros-servicios' },
  { name: 'Adopción', href: '/adopcion' },
  { name: 'Mascotas perdidas', href: '/mascotas-perdidas' }
];

const linksArrayTutor = [
  { name: 'Mis Mascotas', href: '/tutor/mis-mascotas' },
  { name: 'Paseos agendados', href: '/tutor/paseos-agendados' },
  { name: 'Gestion Anuncio', href: '' },
  { name: 'Calificar Paseos', href: '/tutor/calificar-paseos' }
];

const linksArrayPaseador = [
  { name: 'Agenda de Paseos', href: '/paseador/agenda-paseos' },
  { name: 'Historial de Paseos', href: '/paseador/historial-paseos' },
  { name: 'Cancelar Paseos', href: '/paseador/cancelar-paseo' }
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

const Header = ({ user }) => {
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

  console.log('USER', user);

  return (
    <>
      <AppBar
        id="header"
        elevation={0}
        sx={{
          position: 'sticky',
          transition: '0.4s',
          display: 'flex',
          top: 0,
          borderRadius: { xs: 0, lg: 2 },
          bgcolor: '#fff',
          borderBottom: { xs: 0, md: 1 },
          borderColor: { xs: 'transparent', md: 'divider' }
        }}
      >
        <Toolbar sx={{ bgcolor: '#fff', px: '0 !important' }}>
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

          {/* Web Mobile */}
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
              {user && user.rol === 'Tutor'
                ? linksArrayTutor.map((link, index) => (
                    <MenuItem key={index} onClick={() => push(`/${link.href}`)}>
                      <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                        {link.name}
                      </Typography>
                    </MenuItem>
                  ))
                : user && user.rol === 'Paseador'
                ? linksArrayPaseador.map((link, index) => (
                    <HeaderLink key={index} href={link.href}>
                      {link.name}
                    </HeaderLink>
                  ))
                : linksArrayMobile.map((link, index) => (
                    <MenuItem key={index} onClick={() => push(`/${link.href}`)}>
                      <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                        {link.name}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
            <PerfilAvatar {...user} />
          </Box>

          {/* Web Desktop */}
          <Grid container sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Grid
              item
              xs
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.8rem', px: 4 }}
            >
              {user && user.rol === 'Tutor'
                ? linksArrayTutor.map((link, index) => (
                    <HeaderLink key={index} href={link.href}>
                      {link.name}
                    </HeaderLink>
                  ))
                : user && user.rol === 'Paseador'
                ? linksArrayPaseador.map((link, index) => (
                    <HeaderLink key={index} href={link.href}>
                      {link.name}
                    </HeaderLink>
                  ))
                : linksArray.map((link, index) => (
                    <HeaderLink key={index} href={link.href}>
                      {link.name}
                    </HeaderLink>
                  ))}
            </Grid>

            {user ? (
              <Grid
                item
                xs={5}
                sx={{ display: 'flex', justifyContent: 'end', textAlign: 'center', px: 2 }}
              >
                <PerfilAvatar {...user} />
              </Grid>
            ) : (
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  gap: 2,
                  textAlign: 'center',
                  fontSize: '0.8rem',
                  px: 2
                }}
              >
                <HeaderLink href="/paseador/info">Quiero ser un paseador</HeaderLink>
                <Button
                  onClick={() => push('/usuarios/login')}
                  color="secondary"
                  variant="contained"
                  sx={{ textTransform: 'inherit', fontWeight: 'bold' }}
                >
                  Iniciar sesión
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
