import { useApolloClient } from '@apollo/client';
import { useMemo } from 'react';

import { GET_ME } from '../apollo/hooks';

interface UseAuthUserReturnType {
  isAuth: boolean;
  authUser: any | undefined;
  currentWorkspaceId: string | null;
}

const useAuthUser = (): UseAuthUserReturnType => {
  const client = useApolloClient();

  return useMemo(() => {
    const data = client.readQuery({
      query: GET_ME,
    });
    return {
      isAuth: typeof data?.me?.uuid !== 'undefined',
      authUser: data?.me,
      currentWorkspaceId: data?.me?.currentWorkspaceId,
    };
  }, [client]);
};

export default useAuthUser;
