import React, { useCallback, useMemo } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

import { useBFFNFs } from '../../services/infra';

export const useDocsUpload = () => {
  const params = useParams<{ contractId: string }>();
  const { getNFsData, setUploadNF } = useBFFNFs();
  const { data } = useQuery('nfUpload', async () => getNFsData(params.contractId!));
  // const { mutate } = useMutation(data => setUploadNF(params.contractId!, data));

  const res = useMemo(() => data?.data, [data]);

  const handleLoadFile = useCallback((file: File, file64: string | ArrayBuffer) => {
    console.log('fileTalon'), console.log(file);
    console.log(file64);
  }, []);
  return { res, handleLoadFile };
};
