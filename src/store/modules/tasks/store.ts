import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../types';
import {
  IPayloadAddTaskToList,
  IPayloadEditTaskFromList,
  IPayloadMarkTaskCompleted,
  IPayloadRemoveTaskFromList,
  ITasksState
} from './types';

const INITIAL_STATE: ITasksState = {
  items: []
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTaskToList: (state, action: PayloadAction<IPayloadAddTaskToList>) => {
      const { title } = action.payload;
      const date = new Date().getTime();

      state.items.push({ id: Number(date), title: title, done: false });
    },
    removeTaskFromList: (
      state,
      action: PayloadAction<IPayloadRemoveTaskFromList>
    ) => {
      const { id } = action.payload;

      state.items = state.items.filter(task => task.id !== id);
    },
    editTaskFromList: (
      state,
      action: PayloadAction<IPayloadEditTaskFromList>
    ) => {
      const { index, title } = action.payload;

      state.items[index].title = title;
    },
    markTaskCompleted: (
      state,
      action: PayloadAction<IPayloadMarkTaskCompleted>
    ) => {
      const { index } = action.payload;

      state.items[index].done = !state.items[index].done;
    }
  }
});

export const {
  addTaskToList,
  removeTaskFromList,
  editTaskFromList,
  markTaskCompleted
} = tasksSlice.actions;

export const tasksSelector = createSelector(
  (state: RootState) => state.tasks,
  tasks => tasks.items
);

export const counterIncompleteTasks = createSelector(
  (state: RootState) => state.tasks,
  tasks => {
    const incompleteTasks = tasks.items.filter(task => task.done === false);
    return incompleteTasks.length;
  }
);

export const counterCompleteTasks = createSelector(
  (state: RootState) => state.tasks,
  tasks => {
    const completeTasks = tasks.items.filter(task => task.done === true);
    return completeTasks.length;
  }
);
