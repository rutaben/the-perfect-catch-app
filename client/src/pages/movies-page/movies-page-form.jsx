import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Container,
  Box,
  TextField,
  MenuItem,
  List,
  ListItem,
  Typography,
  IconButton
} from '@mui/material';
import * as yup from 'yup';
import SessionService from '../../services/session-service';
import ApiService from '../../services/api-service';
import ContainedButton from '../../components/contained-button';
import ClearIcon from '@mui/icons-material/Clear';

const validationSchema = yup.object({
  title: yup
    .string()
    .required('You must enter a movie title to add it to the list')
    .min(2, 'The movie title must contain at least 2 letters or numbers')
    .max(70, 'The movie title can contain no more than 70 letters or numbers')
});

const initialValues = { title: '' };

const MoviesPageForm = ({ genres }) => {
  const [genresList, setGenresList] = useState([]);

  const userId = SessionService.get('auth').user.id;

  const handleGenresChange = (e) => {
    let currGenresListCopy = [...genresList];
    if (!currGenresListCopy.find((obj) => obj === e.target.value)) {
      currGenresListCopy.push(e.target.value);
      setGenresList(currGenresListCopy);
    } else {
      alert('This genre already exists');
    }
  };

  const handleGenreDeletion = (id) => {
    let currGenresListCopy = [...genresList];
    const filteredList = currGenresListCopy.filter((genre) => genre.id !== id);
    setGenresList(filteredList);
  };

  const onSubmit = async (value, { resetForm }) => {
    try {
      const movieData = { ...value, genres: genresList.map((genre) => genre.id), user: userId };
      await ApiService.createMovie(movieData);
      resetForm(initialValues);
      setGenresList([]);
      window.location.reload(false);
    } catch (error) {
      alert('An error has occured');
    }
  };

  const { values, handleChange, handleSubmit, handleBlur, errors, touched, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit
    });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 7,
          mb: 2,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TextField
          name="title"
          label="Enter movie title..."
          onChange={handleChange}
          value={values.title}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          disabled={isSubmitting}
          variant="outlined"
          fullWidth
        />
        <TextField
          select
          name="genres"
          label="Choose genres"
          type="text"
          onChange={handleGenresChange}
          margin="normal"
          variant="outlined"
          sx={{ mb: 3 }}
        >
          {genres.length ? (
            genres.map((genre) => (
              <MenuItem key={genre.id} value={genre}>
                {genre.title}
              </MenuItem>
            ))
          ) : (
            <MenuItem>Loading...</MenuItem>
          )}
        </TextField>
        <Box>
          <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {genresList.map(({ id, title }) => (
              <ListItem
                key={id}
                sx={{
                  backgroundColor: '#f2f3f4',
                  margin: '0.3rem',
                  paddingRight: 0,
                  borderRadius: 2,
                  height: '2.5rem',
                  width: `${title.length * 0.5 + 5}rem`
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                  }}
                >
                  <Typography sx={{ textTransform: 'capitalize' }}>{title}</Typography>
                  <IconButton onClick={() => handleGenreDeletion(id)}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <ContainedButton title="Pridėti" type="submit" />
      </Box>
    </Container>
  );
};

export default MoviesPageForm;
