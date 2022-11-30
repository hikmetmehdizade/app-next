import { gql, useMutation } from '@apollo/client';
import {
  ChangeCurrentWorkspaceData,
  ChangeCurrentWorkspaceInput,
  CreateWorkspaceData,
  CreateWorkspaceInput,
} from 'api-types';

import { WorkspaceShortInfoFragment } from '../fragments';

export const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($data: CreateWorkspaceInputData!) {
    createWorkspace(data: $data) {
      ...WorkspaceShortInfoFragment
    }
  }
  ${WorkspaceShortInfoFragment}
`;

export const CHANGE_CURRENT_WORKSPACE = gql`
  mutation ChangeCurrentWorkspace($workspaceWhereUniqueInput: WorkspaceWhereUniqueInput!) {
    changeCurrentWorkspace(workspaceWhereUniqueInput: $workspaceWhereUniqueInput) {
      ...WorkspaceShortInfoFragment
    }
  }
  ${WorkspaceShortInfoFragment}
`;

export const useCreateWorkspaceMutation = () =>
  useMutation<CreateWorkspaceData, CreateWorkspaceInput>(CREATE_WORKSPACE, {
    refetchQueries: ['Workspaces'],
  });

export const useChangeCurrentWorkspaceMutation = () =>
  useMutation<ChangeCurrentWorkspaceData, ChangeCurrentWorkspaceInput>(
    CHANGE_CURRENT_WORKSPACE
  );
