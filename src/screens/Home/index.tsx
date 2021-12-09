import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar, TodoCard, Input } from '../../components';
import {
  addTaskToList,
  editTaskFromList,
  removeTaskFromList,
  tasksSelector
} from '../../store/modules/tasks/store';
import { Container, TodoContainer } from './styles';

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [addTaskDisabled, setAddTaskDisabled] = React.useState(false);
  const dispatch = useDispatch();

  const tasks = useSelector(tasksSelector);

  const handleAddTasks = React.useCallback(
    (event: any) => {
      event.preventDefault();
      if (inputValue.trim() === '') return null;

      dispatch(addTaskToList({ title: inputValue }));
      setInputValue('');
    },
    [dispatch, inputValue]
  );

  const removeTask = React.useCallback(
    (id: number) => {
      dispatch(removeTaskFromList({ id: id }));
    },
    [dispatch]
  );

  function editTask(title: string) {
    setInputValue(title);
    setAddTaskDisabled(true);
  }

  const saveEditTask = React.useCallback(
    (index: number, title: string) => {
      if (title.trim() === '') return null;

      dispatch(editTaskFromList({ index: index, title: title }));
      setInputValue('');
      setAddTaskDisabled(false);
    },
    [dispatch]
  );

  function renderTasks() {
    if (!tasks.length) return null;

    const allTasks = tasks.map((task, index) => (
      <TodoCard
        key={task.id}
        task={task}
        deleteTask={() => removeTask(task.id)}
        editTask={() => editTask(task.title)}
        saveEditTask={() => saveEditTask(index, inputValue)}
      />
    ));

    return allTasks;
  }

  return (
    <Container>
      <NavBar />
      <TodoContainer>
        <Input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onSubmit={handleAddTasks}
          disabled={addTaskDisabled}
        />
        {renderTasks()}
      </TodoContainer>
    </Container>
  );
};

export default Dashboard;
