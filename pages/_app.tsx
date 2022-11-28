import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { useApollo } from '../apollo';
import MainLayout from '../layouts/main';
import nextI18Config from '../next-i18next.config';
import { AuthProvider } from '../providers';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <main className={`${inter.variable} font-sans`}>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuthProvider>
      </ApolloProvider>
    </main>
  );
}

export default dynamic(
  () => Promise.resolve(appWithTranslation(MyApp, nextI18Config)),
  {
    ssr: false,
  }
);
