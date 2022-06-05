import { api } from 'services/infra';
export const useRestRequest = () => {
  const get = async (url: string) => {
    try {
      return await api.get(url);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const post = async (url: string, data: {}) => {
    try {
      return await api.post(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const put = async (url: string, data: {}) => {
    try {
      return await api.put(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return { get, post, put };
};
