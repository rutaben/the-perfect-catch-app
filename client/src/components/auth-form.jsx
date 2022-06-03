import React from 'react';
import { Container, Box, Avatar, Typography, Grid, TextField, styled } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ContainedButton from './contained-button';
import PlainLinkDark from './plain-link-dark';
import HeroImage from '../assets/hero-image.png';

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

const AuthForm = ({ textFieldData, initialValues, title, darkLinkTo, darkLinkTitle, onSubmit }) => {
  const { values, handleChange, handleSubmit, handleBlur, errors, touched, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit
    });

  return (
    <>
      <Box>
        <Avatar
          alt="fisherman-with-movie-catch"
          src={HeroImage}
          sx={{ width: '100vw', height: '100%', borderRadius: 0 }}
        />
      </Box>
      <Container maxWidth="xs" component="main">
        <Box component="form" onSubmit={handleSubmit} sx={{ my: 7 }}>
          <StyledBox sx={{ mb: 5 }}>
            <Typography
              variant="body1"
              align="center"
              sx={(theme) => ({ mb: 1, color: theme.palette.secondary.dark })}
            >
              A perfect little free* App, we call it The Perfect Catch. In case you did not know,
              here you can log your favorite movies ON THE GO!
            </Typography>
          </StyledBox>
          <Grid container spacing={2}>
            {textFieldData.map(({ id, name, label, type }) => (
              <Grid item key={id} xs={12}>
                <TextField
                  variant="outlined"
                  size="small"
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
            <Grid item xs={12} sx={{ mt: 2 }}>
              <ContainedButton title={title} type="submit" />
            </Grid>
            <Grid item xs={12}>
              <PlainLinkDark linkTo={darkLinkTo} linkTitle={darkLinkTitle} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box>
        <Typography
          variant="body2"
          align="left"
          sx={(theme) => ({ m: 3, fontSize: '0.75rem', color: theme.palette.secondary.dark })}
        >
          *Nothing in life is really free. We will collect your data while you sleep.
        </Typography>
      </Box>
    </>
  );
};

export default AuthForm;
