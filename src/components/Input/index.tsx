import React from 'react';
import { MdAdd } from 'react-icons/md';

import { ButtonAddTask, Container } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  disabled,
  onSubmit
}) => {
  return (
    <Container>
      <ButtonAddTask type="button" onClick={onSubmit} disabled={disabled}>
        <MdAdd size={20} />
      </ButtonAddTask>
      <form
        onSubmit={onSubmit}
        onKeyPress={e => {
          e.key === 'Enter' && e.preventDefault();
        }}
      >
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
