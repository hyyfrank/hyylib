import { ButtonProps } from './Button.types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  color: #320876;
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { color } = props;
  return <Title>corlor: {color}</Title>;
};

export default Button;
