import { gql, useMutation } from '@apollo/client';

import { UserFragment } from '../fragments';

export const REGISTRATION = gql`
  mutation Registration($data: RegistrationInput!) {
    registration(data: $data) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const useRegistrationMutation = () => useMutation(REGISTRATION);

export const useLoginMutation = () => useMutation(LOGIN);

export const useLogoutMutation = () => useMutation(LOGOUT);
