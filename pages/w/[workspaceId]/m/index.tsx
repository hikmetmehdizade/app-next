import { NextPage } from 'next';
import { useEffect } from 'react';

import { useWorkspaceMembersLazyQuery } from '../../../../apollo/hooks';
import { InviteUserToWorkspaceForm, WorkspaceMemberCard } from '../../../../components/ui';

const Members: NextPage = () => {
  const [getWorkspaceMembers, { data: membersData }] =
    useWorkspaceMembersLazyQuery();

  useEffect(() => {
    getWorkspaceMembers();
  }, []);

  return (
    <div>
      <InviteUserToWorkspaceForm />
      {membersData?.workspaceMembers &&
        membersData.workspaceMembers.map((item) => (
          <WorkspaceMemberCard key={item.uuid} member={item} />
        ))}
    </div>
  );
};

export default Members;
