// Librerías
// MUI
import { FormControl, Select, MenuItem } from '@mui/material';

const SelectMinutos = ({disabled, value, fn}) => {
  return (
    <FormControl disabled={disabled} sx={{ width: '50%' }}>
      <Select autoWidth value={value} onChange={fn}>
        <MenuItem value="0">--</MenuItem>
        <MenuItem value="15">15 min</MenuItem>
        <MenuItem value="30">30 min</MenuItem>
        <MenuItem value="45">45 min</MenuItem>
        <MenuItem value="60">1 hora</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectMinutos;
