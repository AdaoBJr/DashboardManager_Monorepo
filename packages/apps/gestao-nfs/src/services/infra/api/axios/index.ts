import axios from 'axios';
import { getEnv } from '../../../utils';

const env = getEnv();
console.log('ENV', env);
/* istanbul ignore next */
export const api = axios.create({
  baseURL: env.URL_BFF,
});
