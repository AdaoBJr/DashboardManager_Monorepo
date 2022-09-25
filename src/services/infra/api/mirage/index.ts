import { createServer, Model } from 'miragejs';
import { v4 as randomId } from 'uuid';
import { ContratoDocumentos } from '@dash/module-domain';

import { Customer } from 'types/interface';

/* istanbul ignore next */
const mock_url_file =
  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const docs_data = {
  contrato: { id_contrato: '12345', cliente: 'John Doe', placa: 'HTJ-7654' },
  lista_documentos: [
    {
      id: '000123',
      nome: 'CNH',
      scan_impressora: false,
      status: 'pendente',
      documento: { id_gad: null, nome: null, arquivo: null }
    },
    {
      id: '000124',
      nome: 'CRV',
      scan_impressora: false,
      status: 'concluído',
      documento: { id_gad: null, nome: null, arquivo: mock_url_file }
    },
    {
      id: '000125',
      nome: 'Contrato',
      scan_impressora: true,
      status: 'concluído',
      documento: { id_gad: null, nome: null, arquivo: mock_url_file }
    },
    {
      id: '000126',
      nome: 'Maxigarantia',
      scan_impressora: true,
      status: 'pendente',
      documento: { id_gad: null, nome: null, arquivo: null }
    }
  ]
};

export const makeServer = () => {
  const server = createServer({
    models: {
      customer: Model.extend<Partial<Customer>>({}),
      documents: Model.extend<Partial<ContratoDocumentos[]>>([])
    },

    seeds(server) {
      server.db.loadData({
        documents: { ...docs_data }
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/register');
      this.post('/register', (schema, request) => {
        const req = JSON.parse(request.requestBody);

        return schema.create('customer', req);
      });
      this.delete('/register', (schema): any => {
        return schema.db.dump();
      });

      this.post('/login', (schema, request) => {
        return { token: '15d4sdf52st4-3443dx-0e34-45553sd-444' };
      });
      this.delete('/login', (schema): any => {
        return schema.db.dump();
      });

      this.get('/contrato/12345', schema => {
        return schema.find('documents', '1')?.attrs!;
      });

      this.post('/documento/:id', (_, request) => {
        const id = request.params.id;
        const req = JSON.parse(request.requestBody);
        const doc_db = server.db.documents.update(1, {
          lista_documentos: [
            ...docs_data.lista_documentos.map(doc => {
              if (doc.id === id) {
                return {
                  ...doc,
                  status: 'concluído',
                  documento: {
                    arq_base64: req.arquivo,
                    arquivo: mock_url_file,
                    nome: req.nome,
                    id_gad: randomId() // esse id deverá ser do GAD
                  }
                };
              }
              return doc;
            })
          ]
        });
        return doc_db;
      });
    }
  });

  return server;
};
