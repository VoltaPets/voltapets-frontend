// Librarías
import { useState } from 'react';

// MUI
import { Grid, Chip, Typography, Card } from '@mui/material';

const Horario = ({ setHora, hora, estado }) => {
  // Estado
  const [selected, setSelected] = useState(false);

  // Funciones
  const handleSelected = () => {
    if (estado === 'Reservado') return;

    if (selected) {
      setSelected(false);
      setHora(0);
    }

    setSelected(!selected);
    setHora(hora);
  };

  return (
    <Grid item xs={3}>
      <Card
        disabled={estado === 'Reservado' ? true : false}
        variant="outlined"
        onClick={handleSelected}
        sx={{
          p: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          bgcolor:
            estado === 'Bloqueado'
              ? 'rgba(0,0,0, 0.3)'
              : estado === 'Reservado'
              ? 'primary.main'
              : 'white',
          '&:hover': {
            cursor:
              estado === 'Bloqueado' ? 'no-drop' : estado === 'Disponible' ? 'pointer' : 'no-drop',
            borderColor: estado === 'Bloqueado' ? 'none' : 'info.main'
          }
        }}
      >
        <Typography variant="subtitle2" align="center" sx={{ fontWeight: 'bold' }}>
          {hora}:00
        </Typography>
        <Chip
          clickable={estado === 'Bloqueado' ? false : estado === 'Reservado' ? false : true}
          size="small"
          disabled={estado === 'Bloqueado' ? true : false}
          label={estado}
          sx={{ fontWeight: 'bold', fontSize: '0.7em' }}
          color={
            estado === 'Disponible' ? 'info' : estado === 'Reservado' ? 'warning' : 'default'
          }
        />
      </Card>
    </Grid>
  );
};

export default Horario;
