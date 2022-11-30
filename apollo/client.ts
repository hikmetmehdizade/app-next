import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { getCookie } from 'cookies-next';
import { createClient } from 'graphql-ws';
import { NextPageContext } from 'next';

export const APOLLO_STATE_PROP_NAME = 'apolloState';

export function createApolloClient(ctx?: NextPageContext) {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4001/graphql',
    credentials: 'include',
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        );
      });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const wsLink =
    typeof window !== 'undefined'
      ? new GraphQLWsLink(
          createClient({
            url: 'ws://localhost:4001/graphql',
            connectionParams: {
              auth_access_token: getCookie('auth_access_token'),
            },
          })
        )
      : null;

  let link = from([errorLink, httpLink]);

  if (wsLink !== null && typeof window !== 'undefined') {
    const splitLinks = split(
      ({ query }) => {
        const def = getMainDefinition(query);
        return (
          def.kind === 'OperationDefinition' && def.operation === 'subscription'
        );
      },
      wsLink,
      httpLink
    );

    link = from([errorLink, splitLinks]);
  }
  return new ApolloClient({
    link,
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
