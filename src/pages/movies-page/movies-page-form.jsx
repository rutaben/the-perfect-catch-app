import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Container,
  Box, 
  TextField,
} from '@mui/material';
import MoviesPageList from './movies-page-list';
import ContainedButton from '../../components/contained-button';

const MoviesPageForm = () => {
  const [moviesList, setmoviesList] = useState([]);
  const initialValues = {title: ""};

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
    values, handleChange, handleSubmit
  } = useFormik({
    initialValues,
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
