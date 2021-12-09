export interface TodoCardProps {
  editTask: () => void;
  deleteTask: () => void;
  saveEditTask: () => void;
  markTaskCompleted: () => void;
  task: TasksProps;
}

export interface TasksProps {
  id: number;
  title: string;
  done: boolean;
}

export interface CheckedTodoProps {
  checked: boolean;
}

export interface ActiveContainerProps {
  isActive: boolean;
}
