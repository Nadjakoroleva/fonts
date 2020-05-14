import React from 'react';
import styled from 'styled-components';
import FirstCard from './firstCard';
import SecondCard from './secondCard';

const Container = styled.div`
  height: 70vh;
  background-color: #f3f3f3;
  color: #23262c;
  padding: 64px;
  display: flex;
`;

const Table = () => (
  <Container>
    <FirstCard />
    <SecondCard />
  </Container>
);

export default Table;
