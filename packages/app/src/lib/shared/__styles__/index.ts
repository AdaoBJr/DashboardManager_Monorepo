import { Grid, Paper, SxProps, Theme } from '@mui/material';
import { Form as Formik } from 'formik';
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Grid, {
  name: 'Grid',
  slot: 'container'
})(({ theme }) => ({
  margin: '0 auto',
  padding: '.25rem 1rem',
  maxWidth: 1600
}));

export const PaperFormWrapper = styled(Paper, {
  name: 'FormWrapper',
  slot: 'wrapper'
})(({ theme }) => ({
  padding: '2rem 1rem'
}));

export const Form = styled(Formik, {
  name: 'FormContent',
  slot: 'content'
})(({ theme }) => ({
  display: 'grid',
  gap: '1rem'
}));

export const SubmitButton: SxProps<Theme> = {
  marginTop: '1rem',
  padding: '.625rem 1rem',
  fontSize: '1rem',
  fontWeight: 600,
  boxShadow: theme => theme.shadows[5],
  '&:hover': {
    color: '#000',
    transition: '.5s'
  }
};
