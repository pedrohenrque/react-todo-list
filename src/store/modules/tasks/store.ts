import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../types';
import {
  IPayloadAddTaskToList,
  IPayloadEditTaskFromList,
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
    }
  }
});

export const { addTaskToList, removeTaskFromList, editTaskFromList } =
  tasksSlice.actions;

export const tasksSelector = createSelector(
  (state: RootState) => state.tasks,
  tasks => tasks.items
);
