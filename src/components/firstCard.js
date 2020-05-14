// import React, { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   width: 50%;
//   overflow-y: scroll;
//   font-family: 'Arrival Mono';
//   font-size: 13px;
//   line-height: 20px;
//   padding: 64px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Title = styled.div`
//   padding-bottom: 56px;
// `;

// const Row = styled.div`
//   padding-bottom: 48px;
//   cursor: pointer;
// `;

// const Column1 = styled.div``;
// const Column2 = styled.div``;

// const Table = () => {
//   const [textStyle, setTextStyle] = useState(50);

//   const handlerClick2_5 = () => {
//     setTextStyle(2.5);
//   };

//   console.log(textStyle);
//   return (
//     <Container>
//       <Column1>
//         <Title>Font size web (pt/px)</Title>
//         <Row onClick={handlerClick2_5}>2.5</Row>
//         <Row>3.75</Row>
//         <Row>5</Row>
//         <Row>6.25</Row>
//         <Row>7.5</Row>
//         <Row>8.75</Row>
//         <Row>10</Row>
//         <Row>11.25</Row>
//         <Row>12.5</Row>
//         <Row>13.75</Row>
//         <Row>15</Row>
//         <Row>17.5</Row>
//         <Row>20</Row>
//         <Row>22.5</Row>
//         <Row>25</Row>
//         <Row>27.5</Row>
//         <Row>30</Row>
//         <Row>32.5</Row>
//         <Row>35</Row>
//         <Row>37.5</Row>
//         <Row>40</Row>
//         <Row>42.5</Row>
//         <Row>45</Row>
//         <Row>47.5</Row>
//         <Row>50</Row>
//       </Column1>
//       <Column2>
//         {' '}
//         <Title>Font size web (pt/px)</Title>
//         <Row>3</Row>
//         <Row>4.5</Row>
//         <Row>6</Row>
//         <Row>7.5</Row>
//         <Row>9</Row>
//         <Row>10.5</Row>
//         <Row>12</Row>
//         <Row>13.5</Row>
//         <Row>15</Row>
//         <Row>16.5</Row>
//         <Row>18</Row>
//         <Row>21</Row>
//         <Row>24</Row>
//         <Row>27</Row>
//         <Row>30</Row>
//         <Row>33</Row>
//         <Row>36</Row>
//         <Row>39</Row>
//         <Row>42</Row>
//         <Row>45</Row>
//         <Row>48</Row>
//         <Row>51</Row>
//         <Row>54</Row>
//         <Row>57</Row>
//         <Row>60</Row>
//       </Column2>
//     </Container>
//   );
// };

// export default Table;
