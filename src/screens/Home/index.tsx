import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar, TodoCard, Input } from '../../components';
import { IState } from '../../store';
import {
  addTaskToList,
  removeTaskFromList
} from '../../store/modules/tasks/actions';
import { TasksProps } from '../../store/modules/tasks/types';
import { Container, TodoContainer } from './styles';

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();

  const tasks = useSelector<IState, TasksProps[]>(state => state.tasks.items);

  const handleAddTasks = React.useCallback(
    (event: any) => {
      event.preventDefault();
      if (inputValue.trim() === '') return null;

      dispatch(addTaskToList(inputValue));
      setInputValue('');
    },
    [dispatch, inputValue]
  );

  const removeTask = React.useCallback(
    (id: number) => {
      dispatch(removeTaskFromList(id));
    },
    [dispatch]
  );

  const renderTasks = React.useCallback(() => {
    if (!tasks.length) return null;

    const todos = tasks.map((task, index) => (
      <TodoCard
        key={task.id}
        task={task}
        deleteTask={() => removeTask(task.id)}
      />
    ));

    return todos;
  }, [removeTask, tasks]);

  return (
    <Container>
      <NavBar />
      <TodoContainer>
        <Input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onSubmit={handleAddTasks}
        />
        {renderTasks()}
      </TodoContainer>
    </Container>
  );
};

export default Dashboard;
