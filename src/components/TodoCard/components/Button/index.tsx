import React from 'react';

import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ title, color, onClick }) => {
  if (!title && !color) return null;

  return (
    <ButtonContainer type="button" color={color} onClick={onClick}>
      <p>{title}</p>
    </ButtonContainer>
  );
};

export default Button;
