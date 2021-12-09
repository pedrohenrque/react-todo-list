import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { colors } from '../../shared/colors';
import { ActiveContainerProps, CheckedTodoProps } from './types';

export const Container = styled.div<ActiveContainerProps>`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;

  border-radius: 24px;
  border: 2px ${colors.backgroundTodoCard} solid;
  border-color: ${props =>
    props.isActive ? colors.secondary : colors.backgroundTodoCard};
  background-color: ${colors.backgroundTodoCard};
  backdrop-filter: blur(2px);

  -webkit-box-shadow: 6px 5px 42px -8px rgba(0, 0, 0, 0.28);
  box-shadow: 6px 5px 42px -8px rgba(0, 0, 0, 0.28);
  transition: 400ms;

  &:hover {
    background-color: ${lighten(0.02, colors.backgroundTodoCard)};
  }

  & + div {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1<CheckedTodoProps>`
  margin-left: 20px;

  color: ${colors.primary};
  font-size: 18px;
  font-weight: 400;

  ${props =>
    props.checked &&
    css`
      text-decoration: line-through;
    `}
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const DetailDayText = styled.h3`
  margin-left: 52px;

  font-size: 14px;
  font-weight: 400;
  color: ${colors.tertiary};
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxButton = styled.button<CheckedTodoProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  border-radius: 12px;
  background-color: transparent;
  border: 3px ${colors.secondary} solid;

  ${props =>
    props.checked &&
    css`
      background-color: ${colors.secondary};
    `}
`;
