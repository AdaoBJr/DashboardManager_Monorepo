export interface Environment {
  URL_BFF_GO_DASH: string;
}

const ENV_PROD = 'Ambiente a implementar';

export const getEnv = (env = process.env.REACT_APP_NODE_ENV): Environment => {
  switch (env) {
    case 'production':
      return {
        ...(ENV_PROD as any),
      };
    default:
      return {
        URL_BFF_GO_DASH: 'http://localhost:3000/api',
      };
  }
};
