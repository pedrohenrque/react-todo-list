import React from 'react';
import { useSelector } from 'react-redux';

import {
  counterCompleteTasks,
  counterIncompleteTasks
} from '../../store/modules/tasks/store';
import {
  Container,
  Content,
  LogoText,
  LogoTextContainer,
  NumberOfTasksContainer,
  Title
} from './styles';

const NavBar: React.FC = () => {
  const tasksIncomplete = useSelector(counterIncompleteTasks);
  const tasksComolete = useSelector(counterCompleteTasks);

  return (
    <Container>
      <Content>
        <LogoTextContainer>
          <LogoText>
            Todo<span>list</span>
          </LogoText>
        </LogoTextContainer>

        <NumberOfTasksContainer>
          <Title>
            tasks incompletas: <span>{tasksIncomplete}</span>
          </Title>
          <Title>
            tasks completas: <span>{tasksComolete}</span>
          </Title>
        </NumberOfTasksContainer>
      </Content>
    </Container>
  );
};

export default NavBar;
