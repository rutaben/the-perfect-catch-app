import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import AuthService from '../../services/auth-service';
import ApiService from '../../services/api-service';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import MoviesPageForm from './movies-page-form';
import MoviesPageList from './movies-page-list';

const MoviesPage = ({ name }) => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const fetchedGenres = await ApiService.getGenres();
      const modeledGenres = Object.values(fetchedGenres).flat();
      setGenres(modeledGenres);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const fetchedUserMovies = await ApiService.getMovies();
      const modeledGenres = Object.values(fetchedUserMovies).flat();
      setMovies(modeledGenres);
    })();
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="large" onClick={handleLogout}>
          <LogoutIcon />
        </Button>
      </Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" sx={{ mt: 7 }}>
          What did you catch today, {name}?
        </Typography>
        <MoviesPageForm genres={genres} />
      </Container>
      <MoviesPageList movies={movies} />
    </Box>
  );
};

export default MoviesPage;
