import React from 'react';
import Lottie from 'react-lottie';

import animationError from '../../../lotties/error.json';
import animationSuccess from '../../../lotties/correct.json';

const iconScreen = {
  CORRECT: 'CORRECT',
  ERROR: 'ERROR',
};

const AnimationIcon = ({ isCorrect }) => {
  /* lottie icon */
  const iconSize = 120;

  function setIcon(animationData) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return defaultOptions;
  }

  return (
    <div>
      { isCorrect === iconScreen.CORRECT && (
        <Lottie
          options={setIcon(animationSuccess)}
          height={iconSize}
          width={iconSize}
        />
      )}
      { isCorrect === iconScreen.ERROR && (
        <Lottie
          options={setIcon(animationError)}
          height={iconSize}
          width={iconSize}
        />
      )}
    </div>
  );
};

export default AnimationIcon;
