import { SxProps, Theme } from '@mui/material';

export const PaperForm: SxProps<Theme> = {
  width: { xs: '100%', md: '500px' },
  maxHeight: { xs: '100%', md: '900px' },
  marginLeft: { xs: 0, md: '10%', lg: '30%' },
  marginTop: '4rem',
  boxShadow: theme => theme.shadows[13]
};

export const CreateAccountTitle: SxProps<Theme> = {
  textAlign: 'center',
  fontWeight: '700'
};

export const CreateAccountInputs: SxProps<Theme> = {
  width: '100%',
  margin: '.25rem 0',
  '& .MuiInputBase-input': { p: '10px 12px' },
  '& .MuiInputLabel-root': { top: '-5px' }
};
