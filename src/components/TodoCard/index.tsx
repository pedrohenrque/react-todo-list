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

const TodoCard: React.FC<TodoCardProps> = ({ task, deleteTask, editTask }) => {
  const [checked, setChecked] = React.useState(false);
  if (!task) return null;

  const { title } = task;

  return (
    <Container>
      <Content>
        <CheckboxButton
          type="button"
          onClick={() => setChecked(prevCheck => !prevCheck)}
          checked={checked}
        >
          <FaCheck color={colors.backgroundTodoCard} size={14} />
        </CheckboxButton>

        <Title checked={checked}>{title}</Title>
      </Content>

      <DetailContainer>
        <DetailDayText>Today</DetailDayText>
        <ActionContainer>
          <Button
            title="Editar"
            color={colors.editButtonBackground}
            onClick={editTask}
          />
          <Button title="Excluir" color={colors.alert} onClick={deleteTask} />
        </ActionContainer>
      </DetailContainer>
    </Container>
  );
};

export default TodoCard;
