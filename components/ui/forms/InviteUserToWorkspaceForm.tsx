import { yupResolver } from '@hookform/resolvers/yup';
import { InviteUserToWorkspace, WorkspaceMemberRole } from 'api-types';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useInviteUserToWorkspaceMutation } from '../../../apollo/hooks';
import { Button, Dropdown, Input } from '../../common';

interface InviteUserValue
  extends Pick<
    InviteUserToWorkspace,
    'email' | 'firstName' | 'lastName' | 'role'
  > {}

const InviteUserToWorkspaceForm = () => {
  const { query } = useRouter();

  const [inviteUser, { loading }] = useInviteUserToWorkspaceMutation();

  const inviteUserSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    role: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { isValid, errors },
  } = useForm<InviteUserValue>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      role: 'USER',
    },
    resolver: yupResolver(inviteUserSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  console.log('errors', errors);

  const handleChangeRole = (v: string) => {
    const val = v as WorkspaceMemberRole;
    setValue('role', val, { shouldValidate: true });
    trigger('role', { shouldFocus: false });
  };

  const onSubmit: SubmitHandler<InviteUserValue> = (data) => {
    if (query.workspaceId) {
      const uuid = query.workspaceId as string;

      inviteUser({
        variables: {
          data: {
            ...data,
            workspaceWhereUniqueInput: {
              uuid,
            },
          },
        },
      });
    }
  };

  return (
    <form
      className="w-full grid grid-cols-2 auto-rows-auto gap-x-7 gap-y-5 max-sm:grid-cols-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        fullWidth
        errormessage={errors.firstName?.message}
        label="First name"
        {...register('firstName')}
      />
      <Input
        fullWidth
        errormessage={errors.lastName?.message}
        label="Last name"
        {...register('lastName')}
      />
      <Input
        fullWidth
        errormessage={errors.email?.message}
        label="Email"
        {...register('email')}
      />
      <Dropdown
        label="Role"
        items={[
          { label: 'Admin', value: 'ADMIN' },
          { label: 'User', value: 'USER' },
        ]}
        classNames={{ layout: 'self-end' }}
        fullWidth
        onSelect={handleChangeRole}
        value={getValues('role')}
      />
      <Button
        type="submit"
        className="col-span-2 max-sm:col-auto"
        disabled={!isValid}
        loading={loading}
      >
        Invite
      </Button>
    </form>
  );
};

export default InviteUserToWorkspaceForm;
