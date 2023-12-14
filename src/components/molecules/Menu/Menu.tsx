import { MenuProps } from './Menu.types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  color: #320876;
`;

const Input: React.FC<MenuProps> = (props) => {
  const { color } = props;
  return <Title>Menu color: {color}</Title>;
};

export default Input;
