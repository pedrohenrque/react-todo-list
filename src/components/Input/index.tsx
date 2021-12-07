import React from 'react';
import { MdAdd } from 'react-icons/md';

import { ButtonAddTask, Container } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ onChange, value, onSubmit }) => {
  return (
    <Container>
      <ButtonAddTask type="button" onClick={onSubmit}>
        <MdAdd size={20} />
      </ButtonAddTask>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Adicione uma tarefa"
          value={value}
          onChange={onChange}
        />
      </form>
    </Container>
  );
};

export default Input;
