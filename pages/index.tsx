import type { NextPage, NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LoginForm } from '../components/ui';

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
  return (
    <div className="flex flex-col">
      <LoginForm />
    </div>
  );
};

export default Home;
