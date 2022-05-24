import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Container,
  Box, 
  TextField,
} from '@mui/material';
import * as yup from 'yup';
import MoviesPageList from './movies-page-list';
import ContainedButton from '../../components/contained-button';

const validationSchema = yup.object({
  title: yup.string()
    .required('You must enter a movie title to add it to the list')
    .min(2, 'The movie title must contain at least 2 letters or numbers')
    .max(70, 'The movie title can contain no more than 70 letters or numbers')
});

const initialValues = {title: ""};

const MoviesPageForm = () => {
  const [moviesList, setmoviesList] = useState([]);

  const onSubmit = (value, {resetForm}) => {
    let currMoviesListCopy = [...moviesList];
    if (!currMoviesListCopy.find(obj => obj.title === value.title)) {
      currMoviesListCopy.push(value);
      setmoviesList(currMoviesListCopy)
    } else {
      alert ('Toks filmas jau yra.')
    };
    resetForm(initialValues);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
  <Container>
    <Box
    component="form"
    onSubmit={handleSubmit}
    >
      <TextField 
        name="title"
        label="Enter movie title"
        onChange={handleChange}
        value={values.title}
        onBlur={handleBlur}
        error={touched.title && Boolean(errors.title)}
        helperText={touched.title && errors.title}
        disabled={isSubmitting}
        variant="outlined"
        fullWidth
      />
      <ContainedButton title="Pridėti" type="submit"/>
    </Box>
    <MoviesPageList movies={moviesList} />
  </Container>
  )
}

export default MoviesPageForm;
