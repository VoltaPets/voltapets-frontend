// Librerias

// MUI
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Grid,
  Typography
} from '@mui/material';

const ServiciosCard = ({ titulo, descripcion, color = 'info.main', features }) => {
  return (
    <Grid
      item
      xs={12}
      sm={titulo === 'Paseo de mascotas' ? 12 : 6}
      md={4}
      sx={{ order: { xs: titulo === 'Paseo de mascotas' ? -1 : 0, md: 0 } }}
    >
      <Card elevation={1} sx={{ bgcolor: 'white', borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ bgcolor: color, height: 8 }} />
        <CardHeader
          title={titulo}
          titleTypographyProps={{ align: 'center', variant: 'h5' }}
          sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}
        />
        <CardContent>
          <Box>
            <Typography variant="body2" sx={{ color: 'info.main', textAlign: 'justify' }}>
              {descripcion}
            </Typography>
          </Box>
          <Box>
            <List>
              {features.map((feature, index) => (
                <ListItem key={index} sx={{ alignItems: 'start', px: '0 !important', mb: 1 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: 'success.main' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: 'info.main' }}>
                    {feature}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ServiciosCard;
