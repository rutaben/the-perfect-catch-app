/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Stack, Chip } from '@mui/material';
import ApiService from '../../services/api-service';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const MoviesPageList = () => {
  const [moviesList, setMoviesList] = useState([]);
  console.log(moviesList);

  useEffect(() => {
    (async () => {
      const fetchedUserMovies = await ApiService.getMovies();
      const modeledGenres = Object.values(fetchedUserMovies).flat();
      setMoviesList(modeledGenres);
    })();
  }, []);

  return (
    <Box sx={{ my: 7 }}>
      <List>
        {moviesList.map(({ id, title, genres }) => (
          <>
            <ListItem
              key={id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f2f3f4',
                my: 2,
                py: 0.5,
                borderRadius: 2
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography sx={{ textTransform: 'capitalize' }}>{title}</Typography>
                <IconButton sx={{ color: '#ff0028' }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
            <Box sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1}>
                {genres.map(({ id, title }) => {
                  return <Chip key={id} label={title} />;
                })}
              </Stack>
            </Box>
          </>
        ))}
      </List>
    </Box>
  );
};

export default MoviesPageList;
