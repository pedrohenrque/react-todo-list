import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { colors } from '../../shared/colors';
import { Button } from './components';
import {
  ActionContainer,
  CheckboxButton,
  Container,
  Content,
  DetailContainer,
  DetailDayText,
  Title
} from './styles';
import { TodoCardProps } from './types';

const TodoCard: React.FC<TodoCardProps> = ({
  task,
  editTask,
  deleteTask,
  saveEditTask,
  markTaskCompleted
}) => {
  const [checked, setChecked] = React.useState(false);
  const [isActiveCard, setIsActiveCard] = React.useState(false);

  if (!task) return null;

  const { title, done } = task;

  function handleEditTask() {
    if (!editTask) return null;

    editTask();
    setIsActiveCard(true);
  }

  function handleSaveEditTask() {
    if (!saveEditTask) return null;

    saveEditTask();
    setIsActiveCard(false);
  }

  function handleMarkTaskCompleted() {
    if (!markTaskCompleted) return null;

    markTaskCompleted();
    setChecked(checked => !checked);
  }

  function renderActionButtons() {
    return (
      <ActionContainer>
        <Button
          title="Editar"
          color={colors.editButtonBackground}
          onClick={handleEditTask}
        />
        {isActiveCard ? (
          <Button
            title="Salvar"
            color={colors.tertiary}
            onClick={handleSaveEditTask}
          />
        ) : (
          <Button title="Excluir" color={colors.alert} onClick={deleteTask} />
        )}
      </ActionContainer>
    );
  }

  return (
    <Container isActive={isActiveCard}>
      <Content>
        <CheckboxButton
          type="button"
          onClick={handleMarkTaskCompleted}
          checked={checked}
        >
          <FaCheck color={colors.backgroundTodoCard} size={14} />
        </CheckboxButton>
        <Title checked={checked}>{title}</Title>
      </Content>

      <DetailContainer>
        <DetailDayText>Today</DetailDayText>
        {renderActionButtons()}
      </DetailContainer>
    </Container>
  );
};

export default TodoCard;
