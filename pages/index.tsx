import type { NextPage, NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

import { useTaskSubscription } from '../apollo/hooks';
import { Button } from '../components/common';
import { LoginForm, RegistrationForm } from '../components/ui';

export async function getStaticProps({ locale }: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? 'en',
        ['common', 'auth'],
        null,
        ['en']
      )),
      // Will be passed to the page component as props
    },
  };
}

const Home: NextPage = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <div className="flex flex-col justify-items-center items-center">
      <div className="w-2/3">
        {!isRegistration ? <LoginForm /> : <RegistrationForm />}
        <Button fullWidth btnType='secondary' className='mt-5' onClick={() => setIsRegistration((prev) => !prev)}>
          {!isRegistration ? 'Registration' : 'Login'}{' '}
        </Button>
      </div>
    </div>
  );
};

export default Home;
