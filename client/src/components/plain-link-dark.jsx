import React from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.dark,
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const PlainLinkDark = ({ linkTo, linkTitle }) => {
  return <StyledLink to={linkTo}>{linkTitle}</StyledLink>;
};

export default PlainLinkDark;
