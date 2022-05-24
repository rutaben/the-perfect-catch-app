import Button from '@mui/material/Button';

const ContainedButton = ({title, type}) => {
  return (
    <Button variant="contained" type={type}>{title}</Button>
  );
};

export default ContainedButton;