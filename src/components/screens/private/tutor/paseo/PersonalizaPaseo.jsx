import React from 'react';

// MUI
import { Grid, Card, Box, Typography, Divider, Chip, Switch } from '@mui/material';

// Relative Imports
import FormSelect from '../../../../commons/FormSelect';
import SelectMinutos from './SelectMinutos';
import EleccionMascota from './EleccionMascota';
import { parques } from '../../../../../mock/reservaData';
import { clpFormatter } from '../../../../../utils/currencyFormat';
import DisplayPrecios from './DisplayPrecios';

const tarifaBasica = clpFormatter.format(6000);
const tarifaJuego = clpFormatter.format(6500);
const tarifaSocializacion = clpFormatter.format(8000);

const PersonalizaPaseo = ({
  date,
  hora,
  paseoBasico,
  handlePaseoBasico,
  juegoMascota,
  servicioBienestar,
  handleJuegoMascota,
  socializacionMascota,
  handleSocializacion,
  totalMinutos,
  mascotas,
  horaFinal,
  handleToggleMascota,
  handleBienestar,
  control
}) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={8}
        sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
      >
        <Card
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 4,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Personaliza */}
          <Box sx={{ width: '100%', mb: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
              Personaliza tu paseo
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
              {/* Fecha seleccionada */}
              <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
                <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                  Fecha <br /> seleccionada:
                </Typography>
                <Chip
                  size="medium"
                  label={date.toLocaleDateString('es-CL').split(0.6)}
                  sx={{ fontWeight: 'bold' }}
                />
              </Card>

              {/* Hora inicio */}
              <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
                <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                  Hora de inicio <br />
                  seleccionada:
                </Typography>
                <Chip size="medium" label={`${hora}:00`} sx={{ fontWeight: 'bold' }} />
              </Card>

              {/* Hora término */}
              <Card variant="outlined" sx={{ p: 2, borderRadius: 2, flex: 1 }}>
                <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                  Hora de término <br />
                  seleccionada:
                </Typography>
                <Chip size="medium" label={horaFinal} sx={{ fontWeight: 'bold' }} />
              </Card>
            </Box>
          </Box>

          {/* Duración paseo */}
          <Box sx={{ width: '100%', mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
              Fija la duración de tu paseo
            </Typography>

            <Box sx={{ width: '100%', display: 'flex', gap: 2, mb: 2 }}>
              {/* Paseo Básico */}
              <Box
                sx={{
                  flex: 1,
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
                >
                  Servicio Básico
                </Typography>

                <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                  Tiempo de juego <br />
                  con la Mascota
                </Typography>

                <SelectMinutos value={paseoBasico} fn={handlePaseoBasico} />
              </Box>

              <Divider orientation="vertical" flexItem />

              {/* Servicio de Bienestar Integral */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1 }}>
                <Box component="header" sx={{ width: '100%' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Servicio de Bienestar Integral
                  </Typography>
                </Box>

                <Typography
                  variant="caption"
                  color="secondary"
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    display: !servicioBienestar ? 'block' : 'none',
                    mb: 2
                  }}
                >
                  Habilita los servicios adicionales <br />
                  en el panel de la derecha
                </Typography>

                <Box
                  sx={{
                    display: !servicioBienestar ? 'none' : 'flex',
                    flex: 1,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {/* Juego Mascota */}
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                      Tiempo de juego <br />
                      con la Mascota
                    </Typography>

                    <SelectMinutos
                      disabled={!servicioBienestar}
                      value={juegoMascota}
                      fn={handleJuegoMascota}
                    />
                  </Box>

                  {/* Socialización con otras mascotas */}
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Typography variant="body1" sx={{ textAlign: 'justify' }} gutterBottom>
                      Socialización con <br />
                      otras mascotas
                    </Typography>

                    <SelectMinutos
                      disabled={!servicioBienestar}
                      value={socializacionMascota}
                      fn={handleSocializacion}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'end' }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'bold',
                  border: 1,
                  borderRadius: 2,
                  borderColor: 'divider',
                  p: 1
                }}
              >
                Duración total: {totalMinutos} min
              </Typography>
            </Box>
          </Box>

          {/* Selecciona Mascota */}
          <Box sx={{ width: '100%', mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Selecciona las mascotas para el paseo
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: 'center', mb: 2 }}>
              (máximo 2 mascotas)
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2
              }}
            >
              <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                Cantidad de mascotas:
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                {mascotas.length}
              </Typography>
            </Box>

            {/* Mascotas */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <EleccionMascota
                petImg="https://bestforpets.cl/tienda/img/cms/Blog/RAZAS/Pastor-aleman1.jpg"
                nombre="Firulais"
                fn={handleToggleMascota}
                length={mascotas.length}
              />
              <EleccionMascota
                petImg="https://www.publimetro.cl/resizer/zPavlS9VGbupdf6V5psc6Jm17pE=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/FSVO2OKVDFCA5AFMIIKRUNT4UE.jpg"
                nombre="Luna"
                fn={handleToggleMascota}
                length={mascotas.length}
              />
              <EleccionMascota
                petImg="https://www.nombresdeperros.eu/wp-content/uploads/2020/04/macho-de-samoyedo-en-el-jardin.jpg"
                nombre="Nube"
                fn={handleToggleMascota}
                length={mascotas.length}
              />
            </Box>
          </Box>
        </Card>
      </Grid>

      {/* Bienestar */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start'
        }}
      >
        <Card variant="outlined" sx={{ p: 4, borderRadius: 4, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }} gutterBottom>
            ¿Deseas incluir el <b>Servicio de Bienestar Integral</b>?
          </Typography>

          {/* Habilitación de servicio Integral */}
          <Card
            variant="outlined"
            sx={{
              display: 'flex',
              borderRadius: 2,
              alignItems: 'center',
              justifyContent: 'center',
              width: 'fit-content',
              px: 2,
              mx: 'auto',
              gap: 2
            }}
          >
            <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
              Habilitar servicio
            </Typography>
            <Switch
              checked={servicioBienestar}
              onChange={handleBienestar}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Card>

          <Box sx={{ mt: 2, p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }} mb={2}>
              Selecciona un <br />
              parque pet friendly
            </Typography>
            <FormSelect
              dataArray={parques}
              labelText="Parque Pet Friendly"
              name="parque"
              control={control}
              noHelperText
            />
          </Box>

          <Box mt={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }} mb={1}>
              Atención
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify' }} gutterBottom>
              Para contratar los servicios de bienestar integral debes encontrarte ubicado cercano a
              alguno de los parques Pet Friendly de la ciudad
            </Typography>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ p: 4, borderRadius: 4, width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
            Tarifas por minuto
          </Typography>
          <DisplayPrecios descripcion="Paseo de necesidades básicas" precio={tarifaBasica} />
          <DisplayPrecios descripcion="Tiempo de juego con la mascota" precio={tarifaJuego} />
          <DisplayPrecios
            descripcion="Socialización con otras mascotas"
            precio={tarifaSocializacion}
          />
        </Card>
      </Grid>
    </>
  );
};

export default PersonalizaPaseo;
