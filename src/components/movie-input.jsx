import React from 'react';
import {
    Box, 
    Typography, 
    TextField
  } from '@mui/material';
  import SubmitButton from './submit-button';

const MovieInput = () => {
  return (
    <Box>
      <Typography>Favorite movies</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <SubmitButton title="Pridėti"/>
    </Box>
    );
}

export default MovieInput;