import { useCallback } from 'react';
import { ContratoDocumentos } from '@dash/module-domain';

import { api } from '../api';

/* istanbul ignore next */
export const useBFFNFs = () => {
  const getNFsData = useCallback(
    async (id_contract: string) =>
      await api.get<ContratoDocumentos>(`contrato/${id_contract}`),
    []
  );

  const setUploadNF = useCallback(
    async (id_contract: string, data: { nome: string; arquivo: string }) =>
      await api.post<ContratoDocumentos>(`documento/${id_contract}`, data),
    []
  );

  return { getNFsData, setUploadNF };
};
