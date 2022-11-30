import { Workspace } from 'api-types';

import { Button } from '../../common';

interface WorkspaceItemProps {
  workspace: Workspace;
  onChangeWorkspace: (workspaceId: string) => void;
}

const WorkspaceItem = ({
  workspace,
  onChangeWorkspace,
}: WorkspaceItemProps) => {
  return (
    <div className="rounded-lg bg-white flex justify-between py-3 px-6">
      <h5>{workspace.name}</h5>
      <Button onClick={() => onChangeWorkspace(workspace.uuid)}>View</Button>
    </div>
  );
};

export default WorkspaceItem;
