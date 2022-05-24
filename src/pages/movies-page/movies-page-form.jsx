import { useFormik } from 'formik';
import {
  Container,
  Box, 
  TextField,
} from '@mui/material';
import MoviesPageList from './movies-page-list';
import ContainedButton from '../../components/contained-button';

let moviesArr = [];

const MoviesPageForm = () => {
  const initialValues = {title: ""};

  const onSubmit = (value, {resetForm}) => {
    if (!moviesArr.find(obj => obj.title === value.title)) {
      moviesArr.push(value);
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
    <MoviesPageList movies={moviesArr} />
  </Container>
  )
}

export default MoviesPageForm;
