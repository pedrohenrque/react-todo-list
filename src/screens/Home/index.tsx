import React from 'react';

import { NavBar, TodoCard, Input } from '../../components';
import { TasksProps } from '../../components/TodoCard/types';
import { Container, TodoContainer } from './styles';

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [tasks, setTasks] = React.useState<TasksProps[]>([]);

  function handleAddTasks(event: any) {
    event.preventDefault();

    setTasks(prevTasks => {
      if (!prevTasks) return prevTasks;
      const date = new Date();

      return [...prevTasks, { id: Number(date.getTime()), title: inputValue }];
    });
    setInputValue('');
  }

  const removeTask = React.useCallback((id: number) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks;
      const filterTask = newTasks.filter(task => task.id !== id);

      return filterTask;
    });
  }, []);

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
