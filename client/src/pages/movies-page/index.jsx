import { Container, Typography } from '@mui/material';
import MoviesPageForm from './movies-page-form';

const MoviesListPage = ({ name }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" sx={{ mt: 10 }}>
        What did you catch today, {name}?
      </Typography>
      <MoviesPageForm />
    </Container>
  );
};

export default MoviesListPage;
