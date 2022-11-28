interface TaskCardProps {
  task: any;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div>
      <h6>{task.title}</h6>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
