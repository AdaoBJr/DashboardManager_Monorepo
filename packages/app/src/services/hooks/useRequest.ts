import { api, apiRest } from 'services/infra';
import { Auth, Gql } from 'types/interface';

interface GraphQLProps {
  route?: string;
  gql: Gql;
  auth?: Auth;
}

export const useRequest = () => {
  const get = async (url: string) => {
    try {
      return await apiRest.get(url);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const post = async (url: string, data: {}) => {
    try {
      return await apiRest.post(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const put = async (url: string, data: {}) => {
    try {
      return await apiRest.put(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const del = async (url: string, data?: {}) => {
    try {
      return await apiRest.delete(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const graphql = async (url: string, data?: { query: {}; variables: {} }) => {
    try {
      return await apiRest.post(url, data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  // const graphql = async ({ route, gql, auth }: GraphQLProps) => {
  //   const { query, variables } = gql;
  //   const headers = auth && { authorization: `Bearer ${auth.authorization}` };
  //   return Object.values(await api(route).request(query, variables, headers))[0];
  // };

  return { get, post, put, del, graphql };
};
