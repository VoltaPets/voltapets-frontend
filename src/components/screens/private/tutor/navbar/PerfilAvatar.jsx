// Librerías
import { useState } from 'react';
import { useRouter } from 'next';

// MUI
import { Box, IconButton, Avatar, Typography, Menu, MenuItem } from '@mui/material';

// Relative Imports
import Link from '../../../../commons/Link';

const PerfilAvatar = ({ nombre, apellido, imagen, rol }) => {
  // Estados
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  // Funciones
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleProfile = () => {
    push("/tutor/profile")
  };

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/';
  }

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
          <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
          <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default PerfilAvatar;
