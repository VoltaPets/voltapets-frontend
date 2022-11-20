// Librerías

// MUI
import { Grid, Box, Typography, Card, Divider } from '@mui/material';

// Relative imports
import DisplayNota from './DisplayNota';

const notas = {
  positiva: 5.5,
  negativa: 2.5,
  obediencia: 3.5,
  agresion: 4.2
};

const DisplayComportamiento = ({ nombreMascota = 'NOMBRE_MASCOTA' }) => {
  // Funciones
  const promedio = (a, b) => {
    const total = (a + b) / 2;
    return +  Math.round(total * 10) / 10;
  };

  // Variables
  const totalPositivo = (notas.positiva + notas.obediencia) / 2;
  const roundedPositivo = Math.round(totalPositivo * 10) / 10;

  const totalNegativo = (notas.negativa + notas.agresion) / 2;
  const roundedNegativo = Math.round(totalNegativo * 10) / 10;
  const promNotas = promedio(roundedPositivo, roundedNegativo).toFixed(1);
  
  return (
    <Grid container spacing={2}>
      {/* Titulo */}
      <Grid item xs={12}>
        <Typography variant="h6" align="justify" sx={{ fontWeight: 'bold' }}>
          Comportamiento
        </Typography>
      </Grid>

      {/* Decripción */}
      <Grid item xs={12}>
        <Typography variant="body2" align="justify">
          Aquí puedes ver los resultados de las evaluaciones de comportamiento de{' '}
          <strong>{nombreMascota}</strong> que los paseadores han realizado durante los paseos.
        </Typography>
      </Grid>

      {/* Resultados */}
      <Grid item xs={12}>
        <Card
          variant="outlined"
          sx={{
            width: 'fit-content',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
            p: 1
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: totalPositivo > 2.5 ? 'success.main' : 'secondary.main'
              }}
            >
              {roundedPositivo}
            </Typography>
            <Typography variant="caption" align="center" sx={{ fontWeight: 'bold' }}>
              Conducta <br />
              Positiva
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2}} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: totalNegativo > 2.5 ? 'secondary.main' : 'success.main'
              }}
            >
              {roundedNegativo}
            </Typography>
            <Typography variant="caption" align="center" sx={{ fontWeight: 'bold' }}>
              Conducta <br />
              Negativa
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2}} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: totalNegativo > 2.5 ? 'success.main' : 'secondary.main'
              }}
            >
              {promNotas}
            </Typography>
            <Typography variant="caption" align="center" sx={{ fontWeight: 'bold' }}>
              Promedio <br/>
              Conducta
            </Typography>
          </Box>
        </Card>
      </Grid>

      {/* Resultados */}
      <Grid item xs={12}>
        <Typography variant="h6" align="justify" sx={{ fontWeight: 'bold', mb: 2 }}>
          Resultados
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <DisplayNota categoria="Positiva" nota={notas.positiva} />
            <DisplayNota categoria="Negativa" nota={notas.negativa} />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <DisplayNota categoria="Obediencia" nota={notas.obediencia} />
            <DisplayNota categoria="Agresión" nota={notas.agresion} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DisplayComportamiento;
