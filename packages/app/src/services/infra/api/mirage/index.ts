import { createServer, Factory, Model } from 'miragejs';
import * as faker from 'faker';

export interface Customer {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  created_at: string;
}

export const makeServer = () => {
  const server = createServer({
    models: {
      customer: Model.extend<Partial<Customer>>({}),
    },

    factories: {
      customer: Factory.extend({
        firstname(i) {
          return `Firstname ${i + 1}`;
        },
        lastname(i) {
          return `Lastname ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('customer', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/customer');
      this.post('/customer');
    },
  });

  return server;
};
