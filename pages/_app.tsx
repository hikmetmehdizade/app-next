import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { useApollo } from '../apollo';
import MainLayout from '../layouts/main';
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
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </main>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
