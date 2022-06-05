import { api } from 'services/infra';
export const useRequest = () => {
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

  const del = async (url: string, data?: {}) => {
    try {
      return await api.delete(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const graphql = async (url: string, data?: { query: {}; variables: {} }) => {
    try {
      return await api.post(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return { get, post, put, del, graphql };
};
