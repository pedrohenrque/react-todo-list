import styled from 'styled-components';

import { colors } from '../../shared/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;

  background-color: ${colors.backgroundTodoCard};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  width: 500px;
  padding: 0 20px;
`;

export const LogoTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  font-weight: bold;
  color: ${colors.secondary};
  text-align: center;

  span {
    color: ${colors.primary};
  }
`;

export const NumberOfTasksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 300;
  color: ${colors.primary};

  span {
    color: ${colors.secondary};
    font-size: 16px;
    font-weight: bold;
  }
`;
