import { createServer, Model } from 'miragejs';
import { v4 as randomId } from 'uuid';

import { ContratoDocumentos } from '../../../../types/domain';

const docs_data = {
  contrato: { id_contrato: '12345', cliente: 'John Doe', placa: 'HTJ-7654' },
  lista_docs: [
    {
      id: '000123',
      nome: 'CNH',
      scan_impressora: false,
      status: 'pendente',
      documento: { id_gad: null, nome: null, arquivo: null },
    },
    {
      id: '000124',
      nome: 'CRV',
      scan_impressora: false,
      status: 'pendente',
      documento: { id_gad: null, nome: null, arquivo: null },
    },
    {
      id: '000125',
      nome: 'Contrato',
      scan_impressora: true,
      status: 'pendente',
      documento: { id_gad: null, nome: null, arquivo: null },
    },
    {
      id: '000126',
      nome: 'Maxigarantia',
      scan_impressora: true,
      status: 'pendente',
      documento: { id_gad: null, nome: null, arquivo: null },
    },
  ],
};

export const makeServer = () => {
  const server = createServer({
    models: {
      documents: Model.extend<Partial<ContratoDocumentos[]>>([]),
    },

    seeds(server) {
      server.db.loadData({
        documents: { ...docs_data },
      });
    },

    routes() {
      this.namespace = 'mock';
      this.timing = 4000;

      this.get('/contratos', (schema) => schema.all('documents'));

      this.get('/contrato/12345', (schema) => {
        return schema.find('documents', '1');
      });

      this.post('/contrato/12345/documento/:id', (_, request) => {
        const id = request.params.id;
        const req = JSON.parse(request.requestBody);
        const doc_db = server.db.documents.update(1, {
          lista_docs: [
            ...docs_data.lista_docs.map((doc) => {
              if (doc.id === id) {
                return {
                  ...doc,
                  status: 'concluído',
                  documento: {
                    arquivo: req.arquivo,
                    nome: req.nome,
                    id_gad: randomId(), // esse id deverá ser do GAD
                  },
                };
              }
              return doc;
            }),
          ],
        });
        return doc_db;
      });
    },
  });

  return server;
};
