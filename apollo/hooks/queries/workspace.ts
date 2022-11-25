import { gql, useQuery } from '@apollo/client';

import { WorkspaceShortInfoFragment } from '../fragments';

export const GET_WORKSPACES_SHORT_INFO = gql`
  query Workspaces {
    workspaces {
      ...WorkspaceShortInfoFragment
    }
  }
  ${WorkspaceShortInfoFragment}
`;

export const useWorkspaceShortQuery = () => useQuery(GET_WORKSPACES_SHORT_INFO);
