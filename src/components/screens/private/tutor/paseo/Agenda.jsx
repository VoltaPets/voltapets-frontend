// Librerías
import { useState } from 'react';
import { addDays, addMonths } from 'date-fns';

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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// Relative Imports

const Agenda = () => {
  const [date, setDate] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        disablePast
        minDate={addDays(new Date(), 3)}
        shouldDisableMonth={() => addMonths(new Date(), 2)}
        displayStaticWrapperAs="desktop"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default Agenda;

// <TableContainer sx={{ height: 500 }} component={Paper}>
//   <Table sx={{ minWidth: 650, maxHeight: 400, overflowY: 'scroll' }} aria-label="simple table">
//     <TableHead>
//       <TableRow>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Horario</TableCell>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Lunes</TableCell>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Martes</TableCell>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Miércoles</TableCell>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Jueves</TableCell>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Viernes</TableCell>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Sábado</TableCell>
//         <TableCell sx={{ fontWeight: 'bold', fontSize: '0.7em', textAlign: 'center' }}>Domingo</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {rows.map((row) => (
//         <TableRow key={row.horario}>
//           <TableCell component="th" scope="row">
//             {row.horario}
//           </TableCell>
//           <ReservaButton dia={row.lunes} estado={row.lunes} />
//           <ReservaButton dia={row.martes} estado={row.martes} />
//           <ReservaButton dia={row.miercoles} estado={row.miercoles} />
//           <ReservaButton dia={row.jueves} estado={row.jueves} />
//           <ReservaButton dia={row.viernes} estado={row.viernes} />
//           <ReservaButton dia={row.sabado} estado={row.sabado} />
//           <ReservaButton dia={row.domingo} estado={row.domingo} />
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>
