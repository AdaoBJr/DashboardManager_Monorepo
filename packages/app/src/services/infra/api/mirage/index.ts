import * as faker from 'faker';
import { createServer, Factory, Model } from 'miragejs';

import { Customer } from 'types/interface';

export const makeServer = () => {
  const server = createServer({
    models: {
      customer: Model.extend<Partial<Customer>>({}),
    },

    factories: {
      customer: Factory.extend({
        firstname(i) {
          return faker.name.firstName();
        },
        lastname(i) {
          return faker.name.lastName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
      }),
    },

    seeds(server) {
      server.createList('customer', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/customers');
      this.post('/customers');
    },
  });

  return server;
};
