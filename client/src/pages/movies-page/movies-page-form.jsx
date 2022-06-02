/* eslint-disable no-unused-vars */
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
import MoviesPageList from './movies-page-list';
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
  const [moviesList, setmoviesList] = useState([]);
  console.log(moviesList);
  const [genresList, setGenresList] = useState([]);
  console.log(genresList);

  const handleGenresChange = (e) => {
    let currGenresListCopy = [...genresList];
    if (!currGenresListCopy.find((obj) => obj === e.target.value)) {
      currGenresListCopy.push(e.target.value);
      setGenresList(currGenresListCopy);
    } else {
      alert('This genre already exists');
    }
  };

  const onSubmit = (value, { resetForm }) => {
    let joinedValue = { ...value, genres: genresList };
    let currMoviesListCopy = [...moviesList];
    if (!currMoviesListCopy.find((obj) => obj.title === value.title)) {
      currMoviesListCopy.push(joinedValue);
      setmoviesList(currMoviesListCopy);
      setGenresList([]);
    } else {
      alert('This movie already exists');
    }
    resetForm(initialValues);
  };

  const { values, handleChange, handleSubmit, handleBlur, errors, touched, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit
    });

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          my: 5,
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
          sx={{ mt: 5, mb: 2 }}
        />
        <TextField
          select
          name="genres"
          label="Choose genres"
          type="text"
          onChange={handleGenresChange}
          // value={values.genres}
          margin="normal"
          variant="outlined"
          sx={{ mb: 1 }}
        >
          {genres.length ? (
            genres.map(({ id, title }) => (
              <MenuItem key={id} value={title}>
                {title}
              </MenuItem>
            ))
          ) : (
            <MenuItem>Loading...</MenuItem>
          )}
        </TextField>
        <Box>
          <List sx={{ mb: 3, display: 'flex', flexWrap: 'wrap' }}>
            {genresList.map((item) => (
              <ListItem
                key={item}
                sx={{
                  backgroundColor: '#f2f3f4',
                  margin: '0.3rem',
                  paddingRight: 0,
                  borderRadius: 2,
                  height: '2.5rem',
                  width: `${item.length * 0.5 + 5}rem`
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
                  <Typography sx={{ textTransform: 'capitalize' }}>{item}</Typography>
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <ContainedButton title="Pridėti" type="submit" />
      </Box>
      <MoviesPageList />
    </Container>
  );
};

export default MoviesPageForm;
