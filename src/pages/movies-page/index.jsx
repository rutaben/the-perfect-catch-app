import {
    Container,
    Pagination,
    Typography
  } from '@mui/material';
  import MoviesPageForm from './movies-page-form';

const MoviesListPage = () => {
  return (
    <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h4' sx={{ mt: 10 }}>Hi, Username!</Typography>
      <MoviesPageForm />
      <Pagination shape="rounded" count="1" sx={{ mb: 10 }}/>
    </Container>
  )
}

export default MoviesListPage;
