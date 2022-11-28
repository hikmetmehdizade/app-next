import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

import { useMeQuery } from '../apollo/hooks';
import { Routes } from '../constant';
import { useAuthUser } from '../hooks';

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  useMeQuery();
  const { push, asPath } = useRouter();
  const { isAuth } = useAuthUser();

  // useEffect(() => {
  //   console.log("is", isAuth);

  //   if (!isAuth) {
  //     push(Routes.home());
  //   }
  // }, [isAuth, asPath]);

  return <>{children}</>;
};

export default AuthProvider;
