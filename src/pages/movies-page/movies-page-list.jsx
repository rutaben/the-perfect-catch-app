import {
  Box, 
  Typography,
  List,
  ListItem
} from '@mui/material';

const MoviesPageList = ({ movies }) => {
  console.log(movies)
  return (
    <Box>
      <Typography>Čia bus filmai</Typography>
      <List>
        {movies.map((item) => 
          <ListItem key={item.title}>{item.title}</ListItem>
        )}
      </List>
    </Box>
  )
}

export default MoviesPageList;
