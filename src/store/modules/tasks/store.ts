import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../types';
import {
  IPayloadAddTaskToList,
  IPayloadRemoveTaskFromList,
  TasksListProps,
  TasksProps
} from './types';

const INITIAL_STATE: TasksListProps = {
  items: []
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTaskToList: (state, action: PayloadAction<IPayloadAddTaskToList>) => {
      const { title } = action.payload;
      const date = new Date();

      state.items.push({ id: Number(date), title: title });
    },
    removeTaskFromList: (
      state,
      action: PayloadAction<IPayloadRemoveTaskFromList>
    ) => {
      const { id } = action.payload;

      state.items = state.items.filter(task => task.id !== id);
    }
  }
});

export const { addTaskToList, removeTaskFromList } = tasksSlice.actions;

export const tasksSelector = createSelector(
  (state: RootState) => state,
  tasks => tasks.items
);
