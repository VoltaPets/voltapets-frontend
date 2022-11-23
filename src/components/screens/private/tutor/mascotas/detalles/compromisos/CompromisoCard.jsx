import { Card, Typography } from '@mui/material';

const CompromisoCard = ({ titulo, fecha }) => {
  return (
    <Card variant="outlined" sx={{ p: 1, display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="subtitle1" align="justify">
        {titulo}
      </Typography>
      <Typography variant="subtitle2" align="justify">
        {fecha}
      </Typography>
    </Card>
  );
};

export default CompromisoCard;
