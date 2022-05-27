import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  width: '40%',
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.text.light,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  }
}));

const ContainedButton = ({ title, type }) => {
  return (
    <StyledButton variant="contained" type={type} sx={{ px: 4, py: 1, mx: 'auto' }}>
      {title}
    </StyledButton>
  );
};

export default ContainedButton;
