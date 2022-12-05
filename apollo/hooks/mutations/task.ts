import { gql, useMutation } from '@apollo/client';
import { CreateTaskData, CreateTaskInput } from 'api-types';

const CREATE_TASK = gql`
  mutation CreateTask(
    $data: CreateTaskInputData!
    $workspaceWhereUniqueInput: WorkspaceWhereUniqueInput!
    $members: [ConnectWorkspaceMemberInputType!]!
  ) {
    createTask(
      data: $data
      workspaceWhereUniqueInput: $workspaceWhereUniqueInput
      member: $members
    ) {
      _count
    }
  }
`;



export const useCreateTaskMutation = () =>  useMutation<CreateTaskData, CreateTaskInput>(CREATE_TASK)