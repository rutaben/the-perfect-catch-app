/* eslint-disable no-unused-vars */
import { Box, Typography, List, ListItem, Stack, Chip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const MoviesPageList = ({ movies }) => {
  return (
    <Box sx={{ my: 7 }}>
      <List>
        {movies.map(({ title, genres }) => (
          <>
            <ListItem
              key={title}
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
                {genres.map((genre) => {
                  return <Chip key={genre} label={genre} />;
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
