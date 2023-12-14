import { LabelProps } from './Label.types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  color: #320876;
`;

const Label: React.FC<LabelProps> = (props) => {
  const { color } = props;
  return <Title>Label color: {color}</Title>;
};

export default Label;
