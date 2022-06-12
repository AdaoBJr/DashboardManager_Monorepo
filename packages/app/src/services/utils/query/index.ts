import { useRequest } from 'services/hooks';
import { Gql } from 'types/interface';

const request = useRequest();

interface QueryResquestProps {
  route: string;
  gql: Gql;
  db: string;
}

export const queryResquest = async ({ route, gql, db }: QueryResquestProps) => {
  const response = await request.graphql(route, gql);
  console.log('response', response);
  return response.data?.[db].variables.v1;
};
