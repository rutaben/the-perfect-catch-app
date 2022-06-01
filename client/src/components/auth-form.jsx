import React from 'react';
import { Container, Box, Typography, Grid, TextField, styled } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ContainedButton from './contained-button';
import PlainLinkLight from './plain-link-light';
import PlainLinkDark from './plain-link-dark';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, 'First Name must be no shorter than 2 letters')
    .max(32, 'First Name must be no longer than 32 letters'),
  lastName: yup.string().min(2, 'At least 2 letters').max(32, 'Most 32 letters'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .min(6, 'Password must be no shorter than 6 symbols')
    .max(32, 'Password must be no longer than 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Password must contain at least one capital letter')
    .matches(/^.*\d+.*$/, 'Password must contain at least one number')
    .required('Password is required')
});

const AuthForm = ({
  textFieldData,
  initialValues,
  title,
  lightLinkTo,
  lightLinkTitle,
  darkLinkTo,
  darkLinkTitle,
  onSubmit
}) => {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    dirty,
    isSubmitting,
    isValid
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  const handleAsyncSubmit = (event) => {
    if (isSubmitting) event.preventDefault();
    else handleSubmit(event);
  };

  return (
    <Container maxWidth="xs" component="main">
      <Box component="form" onSubmit={handleAsyncSubmit} sx={{ mt: 10 }}>
        <StyledBox sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            {title}
          </Typography>
        </StyledBox>
        <Grid container spacing={4}>
          {textFieldData.map(({ id, name, label, type }) => (
            <Grid item key={id} xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id={id}
                name={name}
                label={label}
                type={type}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[name] && Boolean(errors[name])}
                helperText={touched[name] && errors[name]}
                disabled={isSubmitting}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <ContainedButton
              title={<PlainLinkLight linkTo={lightLinkTo} linkTitle={lightLinkTitle} />}
              type="submit"
              disabled={!dirty || !isValid}
            />
          </Grid>
          <Grid item xs={12}>
            <PlainLinkDark linkTo={darkLinkTo} linkTitle={darkLinkTitle} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AuthForm;
