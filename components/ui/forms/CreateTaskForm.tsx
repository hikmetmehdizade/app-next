import { CreateTaskInput } from 'api-types';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCreateTaskMutation, useWorkspaceMembersQuery } from '../../../apollo/hooks';
import { Button, Input, TextArea } from '../../common';

type CreateTaskValues = CreateTaskInput['data'];

const CreateTaskForm = () => {
  const [createTask, { data }] = useCreateTaskMutation();
  const {} = useWorkspaceMembersQuery();
  const {} = useForm<CreateTaskValues>({
    defaultValues: {
      description: '',
      title: '',
    },
  });

  const onSubmit: SubmitHandler<CreateTaskValues> = ({
    description,
    title,
  }) => {
    createTask({
      variables: {
        data: {
          title,
          description,
        },
        workspaceWhereUniqueInput: {
          uuid: 'sdada',
        },
        members: [],
      },
    });
  };

  return (
    <form className="grid grid-cols-1 auto-cols-auto gap-4">
      <Input fullWidth label="Title" placeholder="Enter task name" />
      <TextArea
        fullWidth
        label="Description"
        placeholder="Enter task description"
      />
      <Button type="submit" fullWidth rounded="md">
        Create Task
      </Button>
    </form>
  );
};

export default CreateTaskForm;
