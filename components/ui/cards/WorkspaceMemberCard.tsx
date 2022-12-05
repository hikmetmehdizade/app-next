import { WorkspaceMember } from 'api-types';

import { Avatar, Badge } from '../../common';

interface WorkspaceMemberCardProps {
  member: WorkspaceMember;
}
const WorkspaceMemberCard = ({ member }: WorkspaceMemberCardProps) => (
  <div>
    <div className="flex items-center">
      <Avatar /> <p>{`${member.user.firstName} ${member.user.lastName}`}</p>
      <Badge>{member.role}</Badge>
    </div>
  </div>
);

export default WorkspaceMemberCard;
