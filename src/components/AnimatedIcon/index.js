import React from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import animationError from '../../../lotties/error.json';
import animationSuccess from '../../../lotties/correct.json';

const CenterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const style = {
  height: 120,
  width: 120,
};

const iconScreen = {
  CORRECT: 'CORRECT',
  ERROR: 'ERROR',
};

const AnimationIcon = ({ isCorrect }) => (
  <div>
    { isCorrect === iconScreen.CORRECT && (
      <CenterItem>
        <Lottie
          style={style}
          animationData={animationSuccess}
        />
      </CenterItem>
    )}
    { isCorrect === iconScreen.ERROR && (
      <CenterItem>
        <Lottie
          style={style}
          animationData={animationError}
        />
      </CenterItem>

    )}
  </div>
);

export default AnimationIcon;
