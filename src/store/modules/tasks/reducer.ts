import { Reducer } from 'redux';

import { ActionTasksTypes } from './enum';
import { TasksListProps } from './types';

const INITIAL_STATE: TasksListProps = {
  items: []
};

const tasks: Reducer<TasksListProps> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTasksTypes.ADD_TASK_TO_LIST: {
      const { title } = action.payload;
      const date = new Date();

      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Number(date.getTime()),
            title: title
          }
        ]
      };
    }

    case ActionTasksTypes.REMOVE_TASK_FROM_LIST: {
      const { id } = action.payload;
      const filterTasks = state.items.filter(task => task.id !== id);

      return {
        ...state,
        items: filterTasks
      };
    }

    default: {
      return state;
    }
  }
};

export default tasks;
