// Libraries
import { useState } from 'react';
import { Controller } from 'react-hook-form';

// MUI
import { Box, Typography } from '@mui/material';

const FilePicker = ({ register, control, errorText }) => {
  const [imagen, setImagen] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (e) => {
    console.log('e.target.files[0]: ', e);
    // setImagen(e.target.files[0]);
    // setisFilePicked(true);

    // const formData = new FormData();
    // formData.append('file', imagen);
    // formData.append('upload_preset', 'public');

    // console.log(formData);
  };

  // const uploadFile = async (e) => {
  //   setLoading(true);
  //   try {
  //     const files = e.target.files;
  //     const formData = new FormData();
  //     formData.append('file', files[0]);
  //     formData.append('upload_preset', 'public');

  //     const { data } = await request({
  //       method: 'POST',
  //       url: 'https://api.cloudinary.com/v1_1/ddwacmj1e/image/upload',
  //       withCredentials: false,
  //       data: formData
  //     });
  //     console.log('data', data);
  //     setImage(formData.secure_url);
  //     setLoading(false);
  //   } catch (err) {
  //     setLoading(false);
  //     console.log('Error uploading file', err);
  //   }
  // };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 2 }}>
      <input
        {...register('imagen', { required: true })}
        type="file"
        id="imagen"
        onChange={handleChange}
        name="imagen"
      />
      <Typography variant="caption">{errorText}</Typography>
    </Box>
  );
};

export default FilePicker;
