import { TasksProps } from '../../store/modules/tasks/types';

export interface TodoCardProps {
  editTask: () => void;
  deleteTask: () => void;
  saveEditTask: () => void;
  markTaskCompleted: () => void;
  task: TasksProps;
}

export interface CheckedTodoProps {
  checked: boolean;
}

export interface ActiveContainerProps {
  isActive: boolean;
  checked: boolean;
}
