import * as faker from 'faker';
import { createServer, Factory, Model } from 'miragejs';

import { Customer } from 'types/interface';

export const makeServer = () => {
  const server = createServer({
    models: {
      customer: Model.extend<Partial<Customer>>({})
    },

    // factories: {
    //   customer: Factory.extend({
    //     firstname(i) {
    //       return faker.name.firstName();
    //     },
    //     lastname(i) {
    //       return faker.name.lastName();
    //     },
    //     email() {
    //       return faker.internet.email().toLowerCase();
    //     },
    //   }),
    // },

    // seeds(server) {
    //   server.createList('customer', 10);
    // },

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
    }
  });

  return server;
};
