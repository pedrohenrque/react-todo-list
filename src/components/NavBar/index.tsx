import React from 'react';
import { useSelector } from 'react-redux';

import { tasksCounterSelector } from '../../store/modules/tasks/store';
import {
  Container,
  Content,
  LogoText,
  LogoTextContainer,
  NumberOfTasksContainer,
  Title
} from './styles';

const NavBar: React.FC = () => {
  const tasksCounter = useSelector(tasksCounterSelector);

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
            tasks incompletas: <span>{tasksCounter}</span>
          </Title>
        </NumberOfTasksContainer>
      </Content>
    </Container>
  );
};

export default NavBar;
