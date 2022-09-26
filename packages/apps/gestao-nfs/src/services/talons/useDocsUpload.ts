import React, { useCallback, useMemo, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

import { useBFFNFs } from '../../services/infra';

export const useDocsUpload = () => {
  const params = useParams<{ contractId: string }>();
  const { getNFsData, setUploadNF } = useBFFNFs();
  const { data } = useQuery('nfUpload', async () => getNFsData(params.contractId!));
  const { mutate } = useMutation(
    async (data: { nome: string; arquivo: string }) =>
      await setUploadNF(params.contractId!, data)
  );

  const [active, setActive] = useState(false);

  const handleOpen = useCallback(() => setActive(true), [setActive]);
  const handleClose = useCallback(() => setActive(false), [setActive]);

  const res = useMemo(() => data?.data, [data]);

  const handleLoadFile = useCallback(async (file: File, file64: string | ArrayBuffer) => {
    const allowedFileSize = 5 * 1024 * 1024;
    if (file.size > allowedFileSize) {
      console.log('Tamanho máximo permitido 5MB');
    } else {
      const data = { nome: file.name, arquivo: String(file64) };
      handleOpen();
      mutate(data);
    }
  }, []);

  return { res, active, handleLoadFile, handleOpen, handleClose };
};
