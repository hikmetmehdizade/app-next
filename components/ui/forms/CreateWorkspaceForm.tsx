import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCreateWorkspaceMutation } from '../../../apollo/hooks';
import { Button, Input } from '../../common';

interface CreateWorkspaceValues {
  name: string;
}

const CreateWorkspaceForm = () => {
  const [createWorkspace] = useCreateWorkspaceMutation();
  const createWorkspaceSchema = yup.object().shape({
    name: yup.string().min(8).required(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateWorkspaceValues>({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(createWorkspaceSchema),
  });

  const onSubmit: SubmitHandler<CreateWorkspaceValues> = (data) => {
    createWorkspace({
      variables: {},
      onCompleted: (data) => {
        if (typeof data?.createWorkspace !== 'undefined') {
          reset();
        }
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 auto-rows-auto gap-4"
    >
      <Input
        fullWidth
        placeholder="Workspace name"
        errormessage={errors.name?.message}
        {...register('name')}
      />
      <Button type="submit" fullWidth rounded="md" disabled={!isValid}>
        Create Workspace
      </Button>
    </form>
  );
};

export default CreateWorkspaceForm;
