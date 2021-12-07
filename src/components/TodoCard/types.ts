export interface TodoCardProps {
  editTask?: () => void;
  deleteTask?: () => void;

  task: TasksProps;
}

export interface TasksProps {
  id: number;
  title: string;
}

export interface CheckedTodoProps {
  checked: boolean;
}
