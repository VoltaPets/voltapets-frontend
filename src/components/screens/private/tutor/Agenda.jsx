// Librerías
// MUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  styled
} from '@mui/material';

// Relative Imports
import { rows, columns } from './datosAgenda';

const ReservaButton = ({ dia }) => {
  return (
    <StyledTableCell>
      <Button
        disabled={dia === 'Bloqueado' ? true : false}
        variant="contained"
        color={dia === 'Disponible' ? 'secondary' : 'info'}
        sx={{
          textTransform: 'inherit',
          fontWeight: 'bold',
          fontSize: '0.7rem',
          color: dia === 'Disponible' ? 'white' : dia === 'Reservado' ? 'white' : 'error'
        }}
      >
        {dia}
      </Button>
    </StyledTableCell>
  );
};

const StyledTableCell = styled(TableCell)({
  padding: 1,
  '&:last-child': {
    borderRight: 'none'
  }
});

const Agenda = () => {
  return (
    <TableContainer sx={{ height: 500 }} component={Paper}>
      <Table sx={{ minWidth: 650, maxHeight: 400, overflowY: 'scroll' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Horario</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Lunes</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Martes</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Miércoles</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Jueves</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Viernes</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Sábado</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Domingo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.horario}>
              <TableCell component="th" scope="row">
                {row.horario}
              </TableCell>
              <ReservaButton dia={row.lunes} estado={row.lunes} />
              <ReservaButton dia={row.martes} estado={row.martes} />
              <ReservaButton dia={row.miercoles} estado={row.miercoles} />
              <ReservaButton dia={row.jueves} estado={row.jueves} />
              <ReservaButton dia={row.viernes} estado={row.viernes} />
              <ReservaButton dia={row.sabado} estado={row.sabado} />
              <ReservaButton dia={row.domingo} estado={row.domingo} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Agenda;
