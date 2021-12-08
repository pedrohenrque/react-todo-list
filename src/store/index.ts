import { configureStore } from '@reduxjs/toolkit';

import { tasksSlice } from './modules/tasks/store';

export const store = configureStore({ reducer: tasksSlice.reducer });
