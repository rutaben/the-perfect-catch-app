import { Box, Typography, List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const MoviesPageList = ({ movies }) => {
  return (
    <Box sx={{ my: 7 }}>
      <List>
        {movies.map((item) => (
          <ListItem
            key={item.title}
            sx={{
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
              <Typography sx={{ textTransform: 'capitalize' }}>{item.title}</Typography>
              <IconButton sx={{ color: '#ff0028' }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MoviesPageList;
