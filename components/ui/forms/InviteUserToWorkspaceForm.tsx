import { yupResolver } from '@hookform/resolvers/yup';
import { InviteUserToWorkspace } from 'api-types';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useInviteUserToWorkspaceMutation } from '../../../apollo/hooks';
import { Button, Input } from '../../common';

interface InviteUserValue
  extends Pick<InviteUserToWorkspace, 'email' | 'firstName' | 'lastName'> {}

const InviteUserToWorkspaceForm = () => {
  const { query } = useRouter();

  const [inviteUser] = useInviteUserToWorkspaceMutation();

  const inviteUserSchema = yup.object().shape({
    email: yup.string().email().required(),
    fistName: yup.string().required(),
    lastName: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<InviteUserValue>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
    resolver: yupResolver(inviteUserSchema),
  });

  const onSubmit: SubmitHandler<InviteUserValue> = (data) => {
    if (query.workspaceId) {
      const uuid = query.workspaceId as string;

      inviteUser({
        variables: {
          data: {
            ...data,
            role: 'USER',
            workspaceWhereUniqueInput: {
              uuid,
            },
          },
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First name" {...register('firstName')} />
      <Input label="Last name" {...register('lastName')} />
      <Input label="Email" {...register('email')} />

      <Button type="submit" disabled={!isValid}>
        Invite
      </Button>
    </form>
  );
};

export default InviteUserToWorkspaceForm;
