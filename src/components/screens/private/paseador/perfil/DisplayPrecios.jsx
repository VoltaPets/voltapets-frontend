// Librerías
import BeatLoader from 'react-spinners/BeatLoader';

// MUI
import { Card, Box, Typography } from '@mui/material';

// Relative imports
import { clpFormatter } from '../../../../../utils/currencyFormat';

const DisplayPrecios = ({ descripcion = 'Precio 1', precio = 10000, loading }) => {
  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 4, gap: 2 }}
    >
      <Typography sx={{ flex: 1 }} variant="body1">
        {descripcion}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {loading ? <BeatLoader size={10}/> : clpFormatter.format(precio)}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#808080' }}>
          / minuto
        </Typography>
      </Box>
    </Card>
  );
};

export default DisplayPrecios;
