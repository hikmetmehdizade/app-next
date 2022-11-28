import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { NextPageContext } from 'next';

export const APOLLO_STATE_PROP_NAME = 'apolloState';

export function createApolloClient(ctx?: NextPageContext) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4001/graphql',
    credentials: 'include',
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
      mutate: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
    },
    credentials: 'include',
  });
}

let client = createApolloClient();

export function initializeApollo(state: any = null, ctx?: NextPageContext) {
  const _client = client ?? createApolloClient(ctx);

  if (state) {
    const existingCache = _client.extract();
    _client.cache.restore({ ...existingCache, ...state });
  }

  if (typeof window === 'undefined') return _client;

  if (!client) client = _client;
  return _client;
}

export default client;
