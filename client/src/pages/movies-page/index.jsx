import { Box, Container, Typography, Button } from '@mui/material';
import AuthService from '../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import MoviesPageForm from './movies-page-form';

const genres = [
  'Action',
  'Adventure',
  'Anime',
  'Comedy',
  'Crime',
  'Documentaries',
  'Fantasy',
  'Horror',
  'Musicals',
  'Romance',
  'Sci-Fi',
  'Sports',
  'Thriller'
];

const MoviesListPage = ({ name }) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
      <Button size="large" onClick={handleLogout}>
        <LogoutIcon />
      </Button>
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
        <MoviesPageForm genres={genres} />
      </Container>
    </Box>
  );
};

export default MoviesListPage;
