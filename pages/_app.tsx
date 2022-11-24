import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

import client from '../apollo';
import MainLayout from '../layouts/main';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <ApolloProvider client={client}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </main>
  );
}

export default MyApp;
