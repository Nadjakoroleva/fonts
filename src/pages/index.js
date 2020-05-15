import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import SEO from '../components/seo';
import Header from '../components/header';
import Table from '../components/table';
import { GlobalStyle } from '../components/globalStyle';
import '../components/fonts.css';

const Container = styled.div`
  height: 100vh;
  background-color: #0f1011;
  font-family: 'Arrival';
`;

const ContainerTable = styled.div`
  height: 70vh;
  background-color: #f3f3f3;
  color: #23262c;
  display: flex;
`;

const ShowCurrent = styled.div`
  padding-top: 1vh;
`;

const ContainerFC = styled.div`
  width: 50%;
  overflow-y: scroll;
  font-size: 13px;
  line-height: 20px;
  padding: 32px 150px 32px 64px;
  display: flex;
  justify-content: space-between;
`;

const TitleFC = styled.div`
  padding-bottom: 56px;
`;

const RowFC = styled.div`
  padding-bottom: 48px;
  cursor: pointer;
  font-family: 'Arrival Mono';
`;

const Column1 = styled.div``;
const Column2 = styled.div``;

const ContainerSC = styled.div`
  width: 50%;
  background-color: rgba(35, 38, 44, 0.1);
  position: relative;
`;

const TitleSC = styled.div`
  font-size: 13px;
  line-height: 20px;
  padding-top: 32px;
  padding-left: 32px;
  text-align: left;
`;

const LineHeight = styled.div`
  text-align: left;
  font-size: 276px;
  line-height: 1.2;
  font-family: 'Arrival';
  position: absolute;
  bottom: 0;
  left: 32px;
`;
const ContainerHeader = styled.div`
  height: 30vh;
  background-color: #0f1011;
  padding: 64px;
  position: relative;
`;

const Span = styled.span`
  font-size: 20px;
  line-height: 24px;
  padding-left: 16px;
`;

const H1 = styled.h1`
  position: absolute;
  bottom: 32px;
  width: 90%;
  font-size: ${({ textStyle }) => `${textStyle}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
`;
const IndexPage = () => {
  const [textStyle, setTextStyle] = useState(30);
  const [lineHeight, setLineHeight] = useState(48);

  const handle2_5 = () => {
    setTextStyle(2.5);
    setLineHeight(4);
  };
  const handle3 = () => {
    setTextStyle(3);
    setLineHeight(4);
  };
  const handle3_75 = () => {
    setTextStyle(3.75);
    setLineHeight(6);
  };
  const handle4_5 = () => {
    setTextStyle(4.5);
    setLineHeight(6);
  };
  const handle5 = () => {
    setTextStyle(5);
    setLineHeight(8);
  };
  const handle6 = () => {
    setTextStyle(6);
    setLineHeight(8);
  };
  const handle6_25 = () => {
    setTextStyle(6.25);
    setLineHeight(10);
  };
  const handle7_5_1 = () => {
    setTextStyle(7.5);
    setLineHeight(10);
  };
  const handle7_5_2 = () => {
    setTextStyle(7.5);
    setLineHeight(12);
  };
  const handle8_75 = () => {
    setTextStyle(8.75);
    setLineHeight(14);
  };
  const handle9 = () => {
    setTextStyle(9);
    setLineHeight(12);
  };
  const handle10 = () => {
    setTextStyle(10);
    setLineHeight(16);
  };
  const handle10_5 = () => {
    setTextStyle(10.5);
    setLineHeight(14);
  };
  const handle11_25 = () => {
    setTextStyle(11.25);
    setLineHeight(18);
  };
  const handle12 = () => {
    setTextStyle(12);
    setLineHeight(16);
  };
  const handle12_5 = () => {
    setTextStyle(12.5);
    setLineHeight(20);
  };
  const handle13_5 = () => {
    setTextStyle(13.5);
    setLineHeight(18);
  };
  const handle13_75 = () => {
    setTextStyle(13.75);
    setLineHeight(22);
  };
  const handle15_1 = () => {
    setTextStyle(15);
    setLineHeight(24);
  };
  const handle15_2 = () => {
    setTextStyle(15);
    setLineHeight(20);
  };
  const handle16_5 = () => {
    setTextStyle(16.5);
    setLineHeight(22);
  };
  const handle17_5 = () => {
    setTextStyle(17.5);
    setLineHeight(28);
  };
  const handle18 = () => {
    setTextStyle(18);
    setLineHeight(24);
  };
  const handle20 = () => {
    setTextStyle(20);
    setLineHeight(32);
  };
  const handle21 = () => {
    setTextStyle(21);
    setLineHeight(28);
  };
  const handle22_5 = () => {
    setTextStyle(22.5);
    setLineHeight(36);
  };
  const handle24 = () => {
    setTextStyle(24);
    setLineHeight(32);
  };
  const handle25 = () => {
    setTextStyle(25);
    setLineHeight(40);
  };
  const handle27 = () => {
    setTextStyle(27);
    setLineHeight(36);
  };
  const handle27_5 = () => {
    setTextStyle(27.5);
    setLineHeight(44);
  };
  const handle30_1 = () => {
    setTextStyle(30);
    setLineHeight(40);
  };
  const handle30_2 = () => {
    setTextStyle(30);
    setLineHeight(48);
  };
  const handle32_5 = () => {
    setTextStyle(32.5);
    setLineHeight(52);
  };
  const handle33 = () => {
    setTextStyle(33);
    setLineHeight(44);
  };
  const handle35 = () => {
    setTextStyle(35);
    setLineHeight(56);
  };
  const handle36 = () => {
    setTextStyle(36);
    setLineHeight(48);
  };
  const handle37_5 = () => {
    setTextStyle(37.5);
    setLineHeight(60);
  };
  const handle39 = () => {
    setTextStyle(39);
    setLineHeight(52);
  };
  const handle40 = () => {
    setTextStyle(40);
    setLineHeight(64);
  };
  const handle42 = () => {
    setTextStyle(42);
    setLineHeight(56);
  };
  const handle42_5 = () => {
    setTextStyle(42.5);
    setLineHeight(68);
  };
  const handle45_1 = () => {
    setTextStyle(45);
    setLineHeight(60);
  };
  const handle45_2 = () => {
    setTextStyle(45);
    setLineHeight(72);
  };
  const handle47_5 = () => {
    setTextStyle(47.5);
    setLineHeight(76);
  };
  const handle48 = () => {
    setTextStyle(48);
    setLineHeight(64);
  };
  const handle50 = () => {
    setTextStyle(50);
    setLineHeight(80);
  };
  const handle51 = () => {
    setTextStyle(51);
    setLineHeight(68);
  };
  const handle54 = () => {
    setTextStyle(54);
    setLineHeight(72);
  };
  const handle57 = () => {
    setTextStyle(57);
    setLineHeight(76);
  };
  const handle60 = () => {
    setTextStyle(60);
    setLineHeight(80);
  };
  return (
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ContainerHeader>
        <GlobalStyle />
        <img src="https://images.ctfassets.net/r0lccig03c53/1FRQbFHBEmzNQlnBEYkYAf/8aa9069fdc3850bab1b4ac32d06ac31e/White.svg?h=16" />
        <Span>Font testing</Span>
        <ShowCurrent>
          Arrival Apercu Pro, {textStyle}px, {lineHeight}lh, 0ls
        </ShowCurrent>
        <H1 textStyle={textStyle} lineHeight={lineHeight}>
          Arrival is a technology company, we create Generation 2 Electric
          Vehicles.{' '}
        </H1>
      </ContainerHeader>
      <ContainerTable>
        <ContainerFC>
          <Column1>
            <TitleFC>Font size web (pt/px)</TitleFC>
            <RowFC onClick={handle2_5}>2.5</RowFC>
            <RowFC onClick={handle3_75}>3.75</RowFC>
            <RowFC onClick={handle5}>5</RowFC>
            <RowFC onClick={handle6_25}>6.25</RowFC>
            <RowFC onClick={handle7_5_2}>7.5</RowFC>
            <RowFC onClick={handle8_75}>8.75</RowFC>
            <RowFC onClick={handle10}>10</RowFC>
            <RowFC onClick={handle11_25}>11.25</RowFC>
            <RowFC onClick={handle12_5}>12.5</RowFC>
            <RowFC onClick={handle13_75}>13.75</RowFC>
            <RowFC onClick={handle15_1}>15</RowFC>
            <RowFC onClick={handle17_5}>17.5</RowFC>
            <RowFC onClick={handle20}>20</RowFC>
            <RowFC onClick={handle22_5}>22.5</RowFC>
            <RowFC onClick={handle25}>25</RowFC>
            <RowFC onClick={handle27_5}>27.5</RowFC>
            <RowFC onClick={handle30_2}>30</RowFC>
            <RowFC onClick={handle32_5}>32.5</RowFC>
            <RowFC onClick={handle35}>35</RowFC>
            <RowFC onClick={handle37_5}>37.5</RowFC>
            <RowFC onClick={handle40}>40</RowFC>
            <RowFC onClick={handle42_5}>42.5</RowFC>
            <RowFC onClick={handle45_2}>45</RowFC>
            <RowFC onClick={handle47_5}>47.5</RowFC>
            <RowFC onClick={handle50}>50</RowFC>
          </Column1>
          <Column2>
            {' '}
            <TitleFC>Font size print (pt/px)</TitleFC>
            <RowFC onClick={handle3}>3</RowFC>
            <RowFC onClick={handle4_5}>4.5</RowFC>
            <RowFC onClick={handle6}>6</RowFC>
            <RowFC onClick={handle7_5_1}>7.5</RowFC>
            <RowFC onClick={handle9}>9</RowFC>
            <RowFC onClick={handle10_5}>10.5</RowFC>
            <RowFC onClick={handle12}>12</RowFC>
            <RowFC onClick={handle13_5}>13.5</RowFC>
            <RowFC onClick={handle15_2}>15</RowFC>
            <RowFC onClick={handle16_5}>16.5</RowFC>
            <RowFC onClick={handle18}>18</RowFC>
            <RowFC onClick={handle21}>21</RowFC>
            <RowFC onClick={handle24}>24</RowFC>
            <RowFC onClick={handle27}>27</RowFC>
            <RowFC onClick={handle30_1}>30</RowFC>
            <RowFC onClick={handle33}>33</RowFC>
            <RowFC onClick={handle36}>36</RowFC>
            <RowFC onClick={handle39}>39</RowFC>
            <RowFC onClick={handle42}>42</RowFC>
            <RowFC onClick={handle45_1}>45</RowFC>
            <RowFC onClick={handle48}>48</RowFC>
            <RowFC onClick={handle51}>51</RowFC>
            <RowFC onClick={handle54}>54</RowFC>
            <RowFC onClick={handle57}>57</RowFC>
            <RowFC onClick={handle60}>60</RowFC>
          </Column2>
        </ContainerFC>
        <ContainerSC>
          <TitleSC>Line Height (pt/px)</TitleSC>
          <LineHeight>{lineHeight}</LineHeight>
        </ContainerSC>
      </ContainerTable>
    </Container>
  );
};

export default IndexPage;
