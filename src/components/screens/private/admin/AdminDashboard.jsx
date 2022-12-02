// Librerías
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// MUI
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AnunciosIcon from '@mui/icons-material/Article';
import PaseosIcon from '@mui/icons-material/Timeline';
import MascotasIcon from '@mui/icons-material/Pets';
import GeneralIcon from '@mui/icons-material/Dashboard';
import UsuariosIcon from '@mui/icons-material/People';

import {
  Card,
  CardMedia,
  MenuItem,
  MenuList,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
  Box
} from '@mui/material';

const opciones = [
  { titulo: 'General', Icono: <GeneralIcon />, tab: 'general' },
  { titulo: 'Usuarios', Icono: <UsuariosIcon />, tab: 'usuarios' },
  { titulo: 'Mascotas', Icono: <MascotasIcon />, tab: 'mascotas' }
  // { titulo: 'Paseos', Icono: <PaseosIcon />, tab: 'paseos' },
  // { titulo: 'Anuncios', Icono: <AnunciosIcon />, tab: 'anuncios' }
];

const AdminDashboard = () => {
  // Hooks
  const { replace, push } = useRouter();

  // Funciones
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const handlePerfil = () => {
    push('/administracion?tab=profile');
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 50
        }}
      >
        {/* Logo */}
        <Box sx={{ flex: 0.2, mb: 4 }}>
          <CardMedia
            component="img"
            image="/logo.jpg"
            alt="Logo"
            sx={{ height: 100, width: 100, mx: 'auto', borderRadius: 2 }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', textAlign: 'center', my: 2, flex: 0.1 }}
          >
            Administración
          </Typography>
        </Box>

        {/* Administracion */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mb: 4
          }}
        >
          <Card
            variant="outlined"
            sx={{ bgcolor: 'rgba(255,255,255, 0.75)', height: 'fit-content', borderRadius: 4 }}
          >
            <MenuList>
              {/* General */}
              {opciones.map((opcion, index) => (
                <MenuItem onClick={() => replace(`/administracion?tab=${opcion.tab}`)} key={index}>
                  <ListItemIcon>{opcion.Icono}</ListItemIcon>
                  <ListItemText primary={opcion.titulo} />
                </MenuItem>
              ))}
            </MenuList>
          </Card>
        </Box>

        {/* Perfil */}
        <Box
          sx={{
            flex: 0.2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            py: 2
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar sx={{ width: 90, height: 90 }}>H</Avatar>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <MenuList>
              {/* Opciones */}
              <MenuItem onClick={handlePerfil}>
                <ListItemIcon>
                  <SettingsIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </MenuItem>

              {/* Cerrar Sesión */}
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </MenuItem>
            </MenuList>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
