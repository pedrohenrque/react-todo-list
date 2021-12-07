import { shade } from 'polished';
import styled from 'styled-components';
import { ButtonStyledProps } from './types';

export const ButtonContainer = styled.button<ButtonStyledProps>`
  padding: 3px 10px;
  border-radius: 4px;
  background-color: transparent;
  color: ${props => props.color};
  transition: 200ms;

  & + button {
    margin-left: 10px;
  }

  p {
    font-size: 12px;
    color: ${props => props.color};

    &:hover {
      color: ${props => shade(0.2, props.color)};
    }
  }
`;
