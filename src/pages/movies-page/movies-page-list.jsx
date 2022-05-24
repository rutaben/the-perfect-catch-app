import {
  Box, 
  Typography,
  List,
  ListItem
} from '@mui/material';

const MoviesPageList = ({ movies }) => {
  return (
    <Box>
      <Typography>Čia bus filmai</Typography>
      <List>
        {movies.map((item) => 
          <ListItem>{item.title}</ListItem>
        )};
      </List>
    </Box>
  )
}

export default MoviesPageList;
