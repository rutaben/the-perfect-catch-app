import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.text.light,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  }
}));

const ContainedButton = ({ title, type, fullWidth }) => {
  return (
    <StyledButton
      variant="contained"
      type={type}
      fullWidth={fullWidth}
      sx={{ px: 10, py: 1, mx: 'auto' }}
    >
      {title}
    </StyledButton>
  );
};

export default ContainedButton;
