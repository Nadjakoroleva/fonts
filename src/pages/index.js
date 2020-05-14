import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import SEO from '../components/seo';
import Header from '../components/header';
import Table from '../components/table';

const Container = styled.div`
  height: 100vh;
  background-color: #0f1011;
`;

const IndexPage = () => (
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Table />
  </Container>
);

export default IndexPage;
