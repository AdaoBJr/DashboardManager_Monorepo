import { GraphQLClient } from 'graphql-request';
import { getEnv } from 'environment';

const env = getEnv();

// export const api = (route?: string) =>
//   new GraphQLClient(`${env.URL_BFF_GO_DASH}/${route}`);

export const api = new GraphQLClient(env.URL_BFF_GO_DASH);
