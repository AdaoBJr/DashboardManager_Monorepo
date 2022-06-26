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
  const resWithV1 = response.data?.[db]?.variables.v1;
  const result = resWithV1 ? resWithV1 : response.data;
  return result;
};
