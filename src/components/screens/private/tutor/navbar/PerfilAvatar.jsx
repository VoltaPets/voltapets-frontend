// Librerías
import { useState } from 'react';
import { useRouter } from 'next/router';

// MUI
import { Box, IconButton, Avatar, Typography, Menu, MenuItem } from '@mui/material';

// Relative Imports
import Link from '../../../../commons/Link';

const PerfilAvatar = ({ nombre, apellido, imagen, rol }) => {
  // Estados
  const [anchorEl, setAnchorEl] = useState(null);

  // Hooks
  const { push } = useRouter();

  const open = Boolean(anchorEl);

  // Funciones
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleHome = () => {
    rol === 'Tutor' ? push('/tutor/home') : push('/paseador/home');
  };

  const handleProfile = () => {
    rol === 'Tutor' ? push('/tutor/profile') : push('/paseador/profile');
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          {`${nombre} ${apellido}`}
        </Typography>
        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
          {rol}
        </Typography>
      </Box>
      <Box sx={{ '&:hover': { cursor: 'pointer' } }}>
        <IconButton onClick={handleClick}>
          <Avatar
            alt="Foto perfil"
            src={imagen?.url + imagen?.path}
            onError={(e) => {
              e.currentTarget.src = '/logo.jpg';
              e.currentTarget.onerror = null;
            }}
            sx={{ height: 50, width: 50 }}
          />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}
        >
          <MenuItem onClick={handleHome}>Mi espacio</MenuItem>
          <MenuItem onClick={handleProfile}>Mi Perfil</MenuItem>
          <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default PerfilAvatar;
