import React, { useReducer } from 'react';
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
  height: 50vh;
  background-color: #f3f3f3;
  color: #23262c;
  display: flex;
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
  padding-bottom: 32px;
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
  line-height: 1;
  font-family: 'Arrival';
  position: absolute;
  bottom: 0;
  left: 32px;
`;
const ContainerHeader = styled.div`
  height: 50vh;
  background-color: #0f1011;
  padding: 64px 64px 32px 64px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 20px;
  line-height: 24px;
  padding-left: 16px;
`;
const ShowCurrent = styled.div`
  padding-top: 16px;
  font-size: 13px;
  line-height: 20px;
`;
const H1 = styled.h1`
  width: 90%;
  font-size: ${({ textStyle }) => `${textStyle}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  letter-spacing: 0;
`;

const fontsMapping = {
  '2.5': 4,
  '3': 4,
  '3.75': 6
}

const defaultStore = {
  textStyle: 30,
  lineHeight: 48
};

const changeTextStyle = (fontSize) => ({
  type: 'CHANGE_TEXT_STYLE',
  payload: fontSize
});

const reducer = (store, action) => {
  switch(action.type) {
    case 'CHANGE_TEXT_STYLE':
      return {
        textStyle: action.payload,
        lineHeight: fontsMapping[action.payload]
      };
    default:
      return store;
  }
}

const IndexPage = () => {
  const [store, dispatch] = useReducer(reducer, defaultStore);
  const { textStyle, lineHeight } = store;

  const handleChangeFontSize = (fontSize) => () => {
    dispatch(changeTextStyle(fontSize));
  };

  return (
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ContainerHeader>
        <GlobalStyle />
        <div style={{ flex: '1 0 auto' }}>
          <img src="https://images.ctfassets.net/r0lccig03c53/1FRQbFHBEmzNQlnBEYkYAf/8aa9069fdc3850bab1b4ac32d06ac31e/White.svg?h=16" />
          <Span>Font testing</Span>
        </div>
        <div>
          <H1 textStyle={textStyle} lineHeight={lineHeight}>
            Arrival is a technology company, we create Generation 2 Electric
            Vehicles.{' '}
          </H1>
        </div>
        <ShowCurrent>
          Arrival Apercu Pro, {textStyle}px, {lineHeight}lh, 0ls
        </ShowCurrent>
      </ContainerHeader>
      <ContainerTable>
        <ContainerFC>
          <Column1>
            <TitleFC>Font size web (pt/px)</TitleFC>
            {[2.5, 3.75].map(item => (
              <RowFC key={item} onClick={handleChangeFontSize(item)}>{item}</RowFC>
            ))}
          </Column1>
          <Column2>
            {' '}
            <TitleFC>Font size print (pt/px)</TitleFC>
            {[3].map(item => (
              <RowFC key={item} onClick={handleChangeFontSize(item)}>{item}</RowFC>
            ))}
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
