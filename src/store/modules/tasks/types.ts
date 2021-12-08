export interface TasksProps {
  id: number;
  title: string;
}

export interface TasksListProps {
  items: TasksProps[];
}

export interface IPayloadAddTaskToList {
  title: string;
}

export interface IPayloadRemoveTaskFromList {
  id: number;
}
