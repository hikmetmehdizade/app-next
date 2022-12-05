import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { WorkspaceMembersData } from 'api-types';

export const GET_WORKSPACE_MEMBER = gql`
  query WorkspaceMembers(
    $where: WorkspaceMemberWhereInput
    $orderBy: [WorkspaceMemberOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    workspaceMembers(
      where: $where
      orderBy: $orderBy
      take: $take
      skip: $skip
    ) {
      uuid
      role
      user {
        uuid
        firstName
        lastName
        email
      }
    }
  }
`;

export const useWorkspaceMembersQuery = () =>
  useQuery<WorkspaceMembersData>(GET_WORKSPACE_MEMBER);

export const useWorkspaceMembersLazyQuery = () =>
  useLazyQuery<WorkspaceMembersData>(GET_WORKSPACE_MEMBER, {
    fetchPolicy: 'cache-and-network',
  });
