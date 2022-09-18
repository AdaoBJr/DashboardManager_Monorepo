import { ButtonComponent } from '../../shared';

interface ButtonUpload {
  id?: string;
  text?: string;
}

export interface ButtonUploadProps extends ButtonComponent {
  compProps?: ButtonUpload;
}
