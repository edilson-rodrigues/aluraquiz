// src/components/QuizBackground/index.js
import styled from 'styled-components';

const BackgroundLeft = styled.div`
  width: 500px;    
  height: 100vh;
  background: rgba( 23, 27, 53, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );  
  flex: 1;
  @media screen and (max-width: 910px) {
      width: 455px;
  }
  @media screen and (max-width: 500px) {
      width: 100%;
      backdrop-filter: none;
      height: 100%
  }
`;

export default BackgroundLeft;
