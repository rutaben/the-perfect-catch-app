import React from 'react';
import { Container, Box, Typography, Grid, TextField } from '@mui/material';
import PlainLink from '../components/plain-link';
import ContainedButton from '../components/contained-button';

const LoginPage = () => {
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
          <Typography variant="h3" sx={{ mb: 3 }}>
            The Perfect Catch
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              fullWidth
              autoFocus
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
            <PlainLink linkTo={'/register'} linkTitle="Don't have an account? Register here" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;
