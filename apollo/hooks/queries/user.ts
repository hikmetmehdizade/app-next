import { gql, useQuery } from '@apollo/client';

import { UserFragment } from '../fragments';

export const GET_ME = gql`
  query Me {
    me {
      ...UserFragment
      currentWorkspace {
        uuid
      }
    }
  }
  ${UserFragment}
`;

export const useMeQuery = () => useQuery(GET_ME);
