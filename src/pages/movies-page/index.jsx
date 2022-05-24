import {
    Box,
    Typography,
  } from '@mui/material';
  import MoviesPageForm from './movies-page-form';

const MoviesListPage = () => {
  return (
    <Box>
      <Typography>My favorite movies</Typography>
      <MoviesPageForm />
    </Box>
  )
}

export default MoviesListPage;