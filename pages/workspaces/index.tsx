import { NextPage, NextPageContext } from 'next';

import { initializeApollo } from '../../apollo';
import {
  GET_WORKSPACES_SHORT_INFO,
  useWorkspaceShortQuery,
} from '../../apollo/hooks';

export async function getServerSideProps(context: NextPageContext) {
  const client = initializeApollo(null, context);
  const data = await client.query({
    query: GET_WORKSPACES_SHORT_INFO,
    fetchPolicy: 'network-only',
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
      data,
    }, // will be passed to the page component as props
  };
}

const Workspaces: NextPage = ({ initialApolloState }: any) => {
  const { data } = useWorkspaceShortQuery();

  return <div></div>;
};

export default Workspaces;
