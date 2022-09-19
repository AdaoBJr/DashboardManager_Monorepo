import { ChangeEvent, useCallback, useMemo } from 'react';

import { UseInputFileProps } from '../../types/interface';

export const useInputFile = (props: UseInputFileProps) => {
  const { loadedFile } = props;
  const handleUploadFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('Selecione um arquivo!');
      return null;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = e =>
      loadedFile && e.target?.result && loadedFile(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  return { handleUploadFile };
};
