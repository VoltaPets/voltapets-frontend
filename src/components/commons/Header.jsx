// Libraries
import { useRouter } from 'next/router';

// MUI
import {
  AppBar,
  Box,
  IconButton,
  Button,
  CardMedia,
  Menu,
  Grid,
  Link,
  Toolbar,
  styled,
  Typography
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

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
      <AppBar position="sticky" elevation={0} sx={{ display: 'flex', top: 0 }}>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#fff' }}>
          <Link component="a" href="/">
            <Box sx={{ width: 150, height: 80 }}>
              <CardMedia
                image="/logo.png"
                alt="Logo empresa"
                component="img"
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Link>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Menu></Menu>
          </Box> */}
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid
              item
              xs
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.8rem' }}
            >
              {linksArray.map((link, index) => (
                <HeaderLink key={index}>{link.name}</HeaderLink>
              ))}
            </Grid>
            <Grid
              item
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
              <HeaderLink href="/registro/paseador">Quiero ser un paseador</HeaderLink>
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
