import { gql, useMutation } from '@apollo/client';
import { LoginInput, RegistrationInput, RegistrationData, LoginData } from 'api-types';

import { UserFragment } from '../fragments';

export const REGISTRATION = gql`
  mutation Registration($data: RegistrationInputType!) {
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

export const useRegistrationMutation = () =>
  useMutation<RegistrationData, RegistrationInput>(REGISTRATION);

export const useLoginMutation = () => useMutation<LoginData, LoginInput>(LOGIN);

export const useLogoutMutation = () => useMutation(LOGOUT);
