import { shade } from 'polished';
import styled from 'styled-components';

import { colors } from '../../shared/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  margin-bottom: 50px;
  border: 3px solid ${colors.backgroundTodoCard};
  border-radius: 24px;
  background: ${colors.background};
  overflow: hidden;
  transition: 0.2s;

  form {
    width: 100%;

    input {
      width: 100%;
      padding: 15px 25px;
      border: none;
      background: none;
      color: ${colors.primary};

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

export const ButtonAddTask = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  width: 25px;
  height: 25px;
  border-radius: 9px;

  background: ${colors.secondary};
  color: ${colors.background};

  &:hover {
    background: ${shade(0.2, colors.secondary)};
  }
`;
