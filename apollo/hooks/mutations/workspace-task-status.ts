import { gql, useMutation } from '@apollo/client';
import {
  CreateWorkspaceTaskStatusData,
  CreateWorkspaceTaskStatusInput,
} from 'api-types';

const CREATE_WORKSPACE_TASK_STATUS = gql`
  mutation CreateWorkspaceTaskStatus($data: WorkspaceTaskStatusCreateInput!) {
    createWorkspaceTaskStatus(data: $data) {
      uuid
    }
  }
`;

export const useCreateWorkspaceTaskStatusMutation = () =>
  useMutation<CreateWorkspaceTaskStatusData, CreateWorkspaceTaskStatusInput>(
    CREATE_WORKSPACE_TASK_STATUS
  );
