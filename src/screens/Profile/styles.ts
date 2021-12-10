import styled from 'styled-components';

import { colors } from '../../shared/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;

  margin-top: 30px;
`;

export const ProfileContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.primary};

  div {
    display: flex;
    flex-direction: column;
  }
`;
