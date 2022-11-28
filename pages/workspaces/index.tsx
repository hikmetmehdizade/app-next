import { NextPage, NextPageContext } from 'next';

import { initializeApollo } from '../../apollo';
import {
  GET_WORKSPACES_SHORT_INFO,
  useChangeCurrentWorkspaceMutation,
  useWorkspaceShortQuery,
} from '../../apollo/hooks';
import { CreateWorkspaceForm, WorkspaceItem } from '../../components/ui';

export async function getServerSideProps(context: NextPageContext) {
  const client = initializeApollo(null, context);

  return {
    props: {
      initialApolloState: client.cache.extract(),
    }, // will be passed to the page component as props
  };
}

const Workspaces: NextPage = ({ initialApolloState }: any) => {
  const { data } = useWorkspaceShortQuery();
  const [changeCurrentWorkspace] = useChangeCurrentWorkspaceMutation();

  const handleChangeWorkspace = (workspaceId: string) => {
    changeCurrentWorkspace({
      variables: {
        workspaceId,
      },
    });
  };

  return (
    <div>
      <CreateWorkspaceForm />
      {data &&
        data.workspaces.map((item) => (
          <WorkspaceItem
            key={item.uuid}
            workspace={item}
            onChangeWorkspace={handleChangeWorkspace}
          />
        ))}
    </div>
  );
};

export default Workspaces;
