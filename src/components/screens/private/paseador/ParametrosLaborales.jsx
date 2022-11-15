// Librerías
import { useState, useEffect } from 'react';

// MUI
import { Card, Box, Button, Typography } from '@mui/material';

// Relative imports
import DisplayPrecios from './perfil/DisplayPrecios';
import PerrosAceptados from '../../../commons/PerrosAceptados';

const ParametrosLaborales = ({ laboral }) => {
  // Estados
  const [loading, setLoading] = useState(true);

  // Effect
  useEffect(() => {
    if (laboral) {
      setLoading(false);
    }
  }, [laboral]);

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        width: '90%'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'start', gap: 4 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
          Parámetros Laborales
        </Typography>
        <Button
          variant="contained"
          color="info"
          sx={{ color: 'white', textTransform: 'inherit', fontWeight: 'bold' }}
        >
          Editar
        </Button>
      </Box>
      {/* Perros Aceptados */}
      <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
        <Card variant="outlined" sx={{ p: 2, flex: 0.5, borderRadius: 4 }}>
          <Typography variant="h6" sx={{ textAlign: 'justify', fontWeight: 'bold', mb: 2 }}>
            Perros Aceptados
          </Typography>
          <Box>
            <Typography variant="subtitle1">Tamaño</Typography>
          </Box>
          <PerrosAceptados
            loading={loading}
            toy={laboral?.toy}
            sm={laboral?.pequenio}
            md={laboral?.mediano}
            lg={laboral?.grande}
            xl={laboral?.gigante}
            cantidad={laboral?.cantidad}
          />
        </Card>

        {/* Tarifas por minuto */}
        <Card variant="outlined" sx={{ p: 2, flex: 0.5, borderRadius: 4 }}>
          <Typography variant="h6" sx={{ textAlign: 'justify', fontWeight: 'bold', mb: 2 }}>
            Tarifas por Minuto
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <DisplayPrecios
              loading={loading}
              descripcion="Paseo de necesidades básicas"
              precio={laboral?.basico}
            />
            <DisplayPrecios
              loading={loading}
              descripcion="Tiempo de juego con la mascota"
              precio={laboral?.juego}
            />
            <DisplayPrecios
              loading={loading}
              descripcion="Socialización con otras mascotas"
              precio={laboral?.social}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ParametrosLaborales;
