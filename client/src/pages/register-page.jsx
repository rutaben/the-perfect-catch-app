import React from 'react';
import { Container, TextField, Typography, Grid, Box } from '@mui/material';
import ContainedButton from '../components/contained-button';
import PlainLink from '../components/plain-link';

const RegisterPage = () => {
  return (
    <Container maxWidth="xs">
      <Box component="form" sx={{ mt: 10 }}>
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="h5" sx={{ mb: 3 }}>
            Create an account
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              fullWidth
              autoFocus
              name="firstName"
              id="firstName"
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              fullWidth
              name="email"
              label="Email"
              id="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              fullWidth
              type="password"
              name="password"
              label="Password"
              id="password"
            />
          </Grid>
          <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ContainedButton
              title={<PlainLink linkTo={'/favorite-movies'} linkTitle="Login" />}
              type="submit"
              fullWidth="true"
            />
          </Grid>
          <Grid item xs={12}>
            <PlainLink linkTo={'/'} linkTitle="Already have an account? Login"></PlainLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RegisterPage;
