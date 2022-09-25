import { InputLabelProps } from '@mui/material';

import { ReactFC } from '../../shared';

interface InputFile {
  loadedFile: (file: File, file64: string | ArrayBuffer) => void;
}

export interface InputFileProps extends ReactFC {
  height?: string;
  color?: string;
  text?: string;
  muiProps?: InputLabelProps;
  compProps: InputFile;
}

export interface UseInputFileProps {
  loadedFile: (file: File, file64: string | ArrayBuffer) => void;
}
