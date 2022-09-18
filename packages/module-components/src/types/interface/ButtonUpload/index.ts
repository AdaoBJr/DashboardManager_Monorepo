import { SxProps, Theme } from '@mui/material';
import { ButtonComponent } from '../../shared';

interface ButtonUpload {
  id?: string;
  text?: string;
  height?: string;
  width?: string;
  startIconCSS?: SxProps<Theme>;
  endIconCSS?: SxProps<Theme>;
}

export interface ButtonUploadProps extends ButtonComponent {
  compProps?: ButtonUpload;
}
