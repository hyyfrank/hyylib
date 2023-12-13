import React, { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  color: #320876;
`;

export const Footer: FunctionComponent = () => {
  return (
    <>
      <Title>footer-1</Title>
      <Button variant="contained">Click</Button>
    </>
  );
};
