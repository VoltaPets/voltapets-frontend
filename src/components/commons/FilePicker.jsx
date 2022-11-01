// Libraries
import { Controller } from 'react-hook-form';
import { useState } from 'react';

// MUI
import { Box, Typography, Button } from '@mui/material';

const FilePicker = ({ control }) => {
  const [file, setFile] = useState();

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  console.log('file', file);
  // console.log('file in base64', convertToBase64(file));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <label htmlFor="upload-file">
        <input
          onChange={handleChange}
          style={{ display: 'none' }}
          type="file"
          id="upload-file"
          name="upload-file"
        />
        <Button
          sx={{ textTransform: 'inherit', fontSize: 'bold' }}
          color="info"
          variant="contained"
          component="span"
        >
          Subir Foto
        </Button>
      </label>
      <Typography variant="subtitle2" sx={{ display: file ? 'block' : 'none' }}>
        <b>Archivo:</b> {file?.name}
      </Typography>
    </Box>
  );
};

export default FilePicker;
