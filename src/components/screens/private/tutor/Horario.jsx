// Librarías
import { useState } from 'react';

// MUI
import { Grid, Chip, Typography, Card } from '@mui/material';

const Horario = ({ setHora, hora, estado }) => {
  // Estados
  const [selected, setSelected] = useState(false);

  // Funciones
  const handleSelected = () => {
    if(selected) {
      setSelected(false);
      setHora('--');
    }
    setSelected(!selected);
    setHora(hora);
  };

  return (
    <Grid item xs={3}>
      <Card
        variant="outlined"
        onClick={handleSelected}
        sx={{
          p: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          bgcolor: estado === 'Bloqueado' ? 'rgba(0,0,0, 0.3)' : selected ? 'rgba(244, 209, 155, 0.9)': 'white',
          '&:hover': {
            cursor:
              estado === 'Bloqueado' ? 'no-drop' : estado === 'Disponible' ? 'pointer' : 'default',
            borderColor: estado === 'Bloqueado' ? 'none' : 'info.main'
          }
        }}
      >
        <Typography variant="subtitle2" align="center" sx={{ fontWeight: 'bold' }}>
          {hora}:00
        </Typography>
        <Chip
          clickable
          size="small"
          disabled={estado === 'Bloqueado' ? true : false}
          label={estado}
          sx={{ fontWeight: 'bold', fontSize: '0.7em' }}
          color={estado === 'Disponible' ? 'secondary' : 'info'}
        />
      </Card>
    </Grid>
  );
};

export default Horario;
