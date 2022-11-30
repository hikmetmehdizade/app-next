import { gql, useQuery } from '@apollo/client';
import { WorkspacesData } from 'api-types';

import { WorkspaceShortInfoFragment } from '../fragments';

export const GET_WORKSPACES_SHORT_INFO = gql`
  query Workspaces {
    workspaces {
      ...WorkspaceShortInfoFragment
    }
  }
  ${WorkspaceShortInfoFragment}
`;

export const useWorkspaceShortQuery = () =>
  useQuery<WorkspacesData>(GET_WORKSPACES_SHORT_INFO);
