import React from 'react';
import { Container, Box, Typography, Grid, TextField, styled } from '@mui/material';
import ContainedButton from './contained-button';
import PlainLinkLight from './plain-link-light';
import PlainLinkDark from './plain-link-dark';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const AuthenticationForm = ({
  textFieldData,
  title,
  lightLinkTo,
  lightLinkTitle,
  darkLinkTo,
  darkLinkTitle
}) => {
  return (
    <Container maxWidth="xs">
      <Box component="form" sx={{ mt: 10 }}>
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
                required
                fullWidth
                id={id}
                name={name}
                label={label}
                type={type}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <ContainedButton
              title={<PlainLinkLight linkTo={lightLinkTo} linkTitle={lightLinkTitle} />}
              type="submit"
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

export default AuthenticationForm;
