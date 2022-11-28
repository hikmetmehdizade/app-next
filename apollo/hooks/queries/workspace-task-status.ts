import { gql, useQuery } from '@apollo/client';

const GET_WORKSPACE_TASK_STATUSES = gql`
  query WorkspaceTaskStatuses {
    workspaceTaskStatuses {
      uuid
      title
      order
    }
  }
`;

export const useWorkspaceTaskStatusesQuery = () =>
  useQuery(GET_WORKSPACE_TASK_STATUSES);
