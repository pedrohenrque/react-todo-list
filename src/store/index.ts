import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { TasksListProps } from './modules/tasks/types';

export interface IState {
  tasks: TasksListProps;
}

const store = createStore(rootReducer);

export default store;
