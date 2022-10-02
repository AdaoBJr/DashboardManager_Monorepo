import { useCallback, useMemo, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

import { useBFFNFs } from '../../services/infra';

interface FileData {
  nome: string;
  arquivo: string;
}

export const useDocsUpload = () => {
  const params = useParams<{ contractId: string }>();
  const { getNFsData, setUploadNF } = useBFFNFs();
  const { data } = useQuery('nfUpload', async () => getNFsData(params.contractId!));
  const { mutate } = useMutation(
    async (data: { nome: string; arquivo: string }) =>
      await setUploadNF(params.contractId!, data, { onUploadProgress })
  );

  const [percent, setPercent] = useState(0);
  const [active, setActive] = useState(false);
  const [fileData, setFileData] = useState<FileData | null>(null);

  const handleOpen = useCallback(() => setActive(true), [setActive]);
  const handleClose = useCallback(() => setActive(false), [setActive]);

  function onUploadProgress({ loaded, total }: ProgressEvent) {
    setPercent(Math.floor((loaded / total) * 100));
  }
  console.log('percent', percent);

  const res = useMemo(() => data?.data, [data]);

  const handleLoadFile = useCallback(async (file: File, file64: string | ArrayBuffer) => {
    const allowedFileSize = 5 * 1024 * 1024;
    if (file.size > allowedFileSize) {
      console.log('Tamanho máximo permitido 5MB');
    } else {
      const fileData: FileData = { nome: file.name, arquivo: String(file64) };
      setFileData(fileData);
      handleOpen();
    }
  }, []);

  const handleSubmitFile = useCallback(() => {
    mutate(fileData!);
    handleClose();
  }, [fileData]);

  return { res, active, handleLoadFile, handleOpen, handleClose, handleSubmitFile };
};
