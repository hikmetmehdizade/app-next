import { gql, useMutation } from '@apollo/client';
import {
  InviteUserToWorkspaceData,
  InviteUserToWorkspaceInput,
} from 'api-types';

export const INVITE_USER_TO_WORKSPACE = gql`
  mutation inviteUserToWorkspace($data: InviteUserToWorkspaceInput!) {
    inviteUserToWorkspace(data: $data) {
      _count
    }
  }
`;

export const useInviteUserToWorkspaceMutation = () =>
  useMutation<InviteUserToWorkspaceData, InviteUserToWorkspaceInput>(
    INVITE_USER_TO_WORKSPACE
  );
