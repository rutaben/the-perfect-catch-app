import React from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}));

const PlainLink = ({ linkTo, linkTitle }) => {
  return <StyledLink to={linkTo}>{linkTitle}</StyledLink>;
};

export default PlainLink;
