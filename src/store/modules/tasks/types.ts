export interface TasksProps {
  id: number;
  title: string;
  done: boolean;
  date: any;
}

export interface ITasksState {
  items: TasksProps[];
}

export interface IPayloadAddTaskToList {
  title: string;
}

export interface IPayloadRemoveTaskFromList {
  id: number;
}

export interface IPayloadEditTaskFromList {
  index: number;
  title: string;
}

export interface IPayloadMarkTaskCompleted {
  index: number;
}
