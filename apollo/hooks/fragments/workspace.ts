import { gql } from '@apollo/client';

export const WorkspaceShortInfoFragment = gql`
  fragment WorkspaceShortInfoFragment on Workspace {
    uuid
    name
  }
`;
