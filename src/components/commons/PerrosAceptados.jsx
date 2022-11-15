// Librerías
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Close, Check } from '@mui/icons-material';
import { Box, Grid, Card, Typography } from '@mui/material';

const CheckCloseOption = ({ opt }) => {
  return opt ? (
    <Check sx={{ fontSize: '1.5em', flex: 0.3 }} color="info.main" />
  ) : (
    <Close sx={{ fontSize: '1.5em', flex: 0.3 }} color="secondary" />
  );
};

const PerrosAceptados = ({
  loading,
  toy = false,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  cantidad = 0
}) => {
  return (
    <Grid container>
      {/* Tamaño Toy, Pequeño y Mediano */}
      <Grid item xs={6} py={1} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Toy
          </Typography>
          {loading ? <BeatLoader size={10} /> : <CheckCloseOption opt={toy} />}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Pequeño
          </Typography>
          {loading ? <BeatLoader size={10} /> : <CheckCloseOption opt={sm} />}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Mediano
          </Typography>
          {loading ? <BeatLoader size={10} /> : <CheckCloseOption opt={md} />}
        </Box>
      </Grid>

      {/* Tamaño Grande y Gigante */}
      <Grid item xs={6} py={1} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Grande
          </Typography>
          {loading ? <BeatLoader size={10} /> : <CheckCloseOption opt={lg} />}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '1em' }}>
            Tamaño Gigante
          </Typography>
          {loading ? <BeatLoader size={10} /> : <CheckCloseOption opt={xl} />}
        </Box>
      </Grid>

      {/* Cantidad Perros */}
      <Grid
        item
        xs={12}
        pt={4}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Card
          variant="outlined"
          sx={{ display: 'flex', gap: 4, alignItems: 'center', p: 1, width: 'fit-content' }}
        >
          <Typography variant="subtitle2" sx={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
            Cantidad de perros <br />
            por paseo:
          </Typography>
          {loading ? (
            <BeatLoader size={10} />
          ) : (
            <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
              {cantidad > 1
                ? `${cantidad} Perros`
                : cantidad === 0
                ? 'Sin especificar'
                : `${cantidad} Perro`}
            </Typography>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default PerrosAceptados;
