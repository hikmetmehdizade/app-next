import { gql, useMutation } from '@apollo/client';

const CREATE_WORKSPACE_TASK_STATUS = gql`
  mutation CreateWorkspaceTaskStatus($data: WorkspaceTaskStatusCreateInput!) {
    createWorkspaceTaskStatus(data: $data) {
      uuid
    }
  }
`;

export const useCreateWorkspaceTaskStatusMutation = () =>
  useMutation(CREATE_WORKSPACE_TASK_STATUS);
