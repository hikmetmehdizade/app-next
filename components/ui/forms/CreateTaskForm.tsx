import { Button, Input, TextArea } from '../../common';

const CreateTaskForm = () => {
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
