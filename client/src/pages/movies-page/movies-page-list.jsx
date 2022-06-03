import React from 'react';
import { Container, Box, Typography, List, ListItem, Stack, Chip } from '@mui/material';
import ApiService from '../../services/api-service';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const MoviesPageList = ({ movies }) => {
  const handleMovieDeletion = async (id) => {
    await ApiService.deleteMovie(id);
    window.location.reload(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5">Favorite movies</Typography>
      <List>
        {movies.map(({ id, title, genres }) => (
          <Box key={id}>
            <ListItem
              sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundColor: theme.palette.background.light,
                my: 2,
                py: 0.5,
                borderRadius: 2
              })}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                  {title}
                </Typography>
                <IconButton sx={{ color: '#ff0028' }} onClick={() => handleMovieDeletion(id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
            <Box sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1}>
                {genres.map((genre) => {
                  return <Chip key={Math.floor(Math.random() * Date.now())} label={genre.title} />;
                })}
              </Stack>
            </Box>
          </Box>
        ))}
      </List>
    </Container>
  );
};

export default MoviesPageList;
