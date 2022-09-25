interface Contrato {
  id_contrato: string;
  cliente: string;
  placa: string;
}

interface DetalhesArquivo {
  id_gad: string | null;
  nome: string | null;
  arquivo: string | null;
  arq_base: string | null;
}

export interface DetalhesDocumento {
  id: string;
  nome: string;
  scan_impressora: boolean;
  status: 'pendente' | 'concluído';
  documento: DetalhesArquivo;
}

export interface ContratoDocumentos {
  contrato: Contrato;
  lista_documentos: DetalhesDocumento[];
}
