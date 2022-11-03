import React from 'react';

// MUI
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Grid, Chip, Card, Rating, CardMedia, Divider, Box, Typography } from '@mui/material';

// Relative imports
import Layout from '../../../../src/components/commons/Layout';
import AgendaPaseos from '../../../../src/components/screens/private/tutor/AgendaPaseos';

function AgendarPaseoPage() {
  return (
    <Layout description="Página para agendar paseo" title="Agendar Paseo" authRequired={true}>
      <Grid container mb={4}>
        {/* Información de perfil */}
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}
        >
          <Box sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Perfil de paseador
            </Typography>
          </Box>

          <Card variant="outlined" sx={{ width: '90%', p: 2, borderRadius: 4, display: 'flex' }}>
            {/* Foto e información */}
            <Box
              component="aside"
              sx={{ flex: 0.4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <CardMedia
                component="img"
                image="https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/450_1000.webp"
                alt="Foto de paseador"
                sx={{
                  width: '100%',
                  maxHeight: 200,
                  objectFit: 'cover',
                  border: 1,
                  borderRadius: 4,
                  mb: 1
                }}
              />

              <Box mb={2}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Nombre Apellido
                </Typography>
                <Typography variant="body1">X años de experiencia</Typography>
              </Box>
              <Rating value={4} readOnly />
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

            <Box component="main" sx={{ flex: 1, display: 'flex' }}>
              {/* Descripción y tarifas */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Descripción
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aperiam numquam
                  adipisci ad animi temporibus vero rerum beatae? Iure corrupti nulla atque ipsa
                  eius consectetur ex impedit iste, incidunt nihil?
                </Typography>

                <Box
                  mt={4}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Tarifas por minuto
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Paseo de necesidades básicas:{' '}
                    </Typography>
                    <Typography variant="subtitle2">$x.xxx</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Tiempo de juego con la mascota:{' '}
                    </Typography>
                    <Typography variant="subtitle2">$x.xxx</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Socializción con otras mascotas:{' '}
                    </Typography>
                    <Typography variant="subtitle2">$x.xxx</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

              {/* Condiciones de paseo */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Perros permitidos
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>
                  Tamaño
                </Typography>
                <Grid container mb={2}>
                  <Grid item xs={6} py={1}>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ flex: 1 }}>
                        Tamaño Toy
                      </Typography>
                      <CloseIcon sx={{ fontSize: '1.2em', flex: 0.3 }} color="secondary" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ flex: 1 }}>
                        Tamaño Pequeño
                      </Typography>
                      <CheckIcon sx={{ fontSize: '1.2em', flex: 0.3 }} color="info.main" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ flex: 1 }}>
                        Tamaño Mediano
                      </Typography>
                      <CheckIcon sx={{ fontSize: '1.2em', flex: 0.3 }} color="info.main" />
                    </Box>
                  </Grid>
                  <Grid item xs={6} py={1}>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ flex: 1 }}>
                        Tamaño Grande
                      </Typography>
                      <CloseIcon sx={{ fontSize: '1.2em', flex: 0.3 }} color="secondary" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ flex: 1 }}>
                        Tamaño Gigante
                      </Typography>
                      <CheckIcon sx={{ fontSize: '1.2em', flex: 0.3 }} color="info.main" />
                    </Box>
                  </Grid>
                </Grid>

                <Typography variant="subtitle1" sx={{ textAlign: 'justify' }} gutterBottom>
                  Cantidad de Perros por paseo
                </Typography>
                <Chip
                  label="2 Perros"
                  variant="outlined"
                  sx={{ mr: 1, fontWeight: 'bold' }}
                  color="warning"
                />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Agenda de paseos */}
        <AgendaPaseos />
      </Grid>
    </Layout>
  );
}

export default AgendarPaseoPage;
