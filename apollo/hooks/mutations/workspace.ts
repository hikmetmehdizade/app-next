import { gql, useMutation } from '@apollo/client';

import { WorkspaceShortInfoFragment } from '../fragments';

export const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($data: WorkspaceCreateInput!) {
    createWorkspace(data: $data) {
      ...WorkspaceShortInfoFragment
    }
  }
  ${WorkspaceShortInfoFragment}
`;

export const CHANGE_CURRENT_WORKSPACE = gql`
  mutation ChangeCurrentWorkspace($workspaceId: String!) {
    changeCurrentWorkspace(workspaceId: $workspaceId) {
      ...WorkspaceShortInfoFragment
    }
  }
  ${WorkspaceShortInfoFragment}
`;

export const useCreateWorkspaceMutation = () =>
  useMutation(CREATE_WORKSPACE, {
    refetchQueries: ['Workspaces'],
    variables: {},
  });

export const useChangeCurrentWorkspaceMutation = () =>
  useMutation(CHANGE_CURRENT_WORKSPACE);
