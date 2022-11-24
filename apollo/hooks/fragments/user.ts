import { gql } from '@apollo/client';

export const UserFragment = gql`
  fragment UserFragment on User {
    uuid
    email
    firstName
    lastName
    currentWorkspaceId
  }
`;
