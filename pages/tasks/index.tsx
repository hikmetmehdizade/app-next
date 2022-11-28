import { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  useCreateWorkspaceTaskStatusMutation,
  useWorkspaceTaskStatusesQuery,
} from '../../apollo/hooks';
import { Button, Input } from '../../components/common';

interface Values {
  title: string;
}

const Tasks: NextPage = () => {
  useWorkspaceTaskStatusesQuery();
  const [createWorkspaceTaskStatus] = useCreateWorkspaceTaskStatusMutation();

  const { register, handleSubmit } = useForm<Values>({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit: SubmitHandler<Values> = (data) => {
    createWorkspaceTaskStatus({
      variables: {
        data: {
          title: data.title,
        },
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('title')} />

        <Button type="submit"> Create</Button>
      </form>
      <div></div>
    </div>
  );
};

export default Tasks;
