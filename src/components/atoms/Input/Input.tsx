import { InputProps } from './Input.types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  color: #320876;
`;

const Input: React.FC<InputProps> = (props) => {
  const { color } = props;
  return <Title>input color: {color}</Title>;
};

export default Input;
