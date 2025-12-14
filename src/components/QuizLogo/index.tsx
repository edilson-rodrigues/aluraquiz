import styled from 'styled-components';
import React from 'react';
import QuizLogoAlura from './alura_quiz';

interface Props {
  className: string;
  quizDaGalera?: boolean;
}

function Logo({ className, quizDaGalera = false }: Props) {
  return (
    <div>
      {!quizDaGalera && (
        <img
          className={className}
          width="318.75"
          height="133.45"
          src="/avengers_end_game.png"
          alt="logo_avengers_end_game"
        />
      )}
      {quizDaGalera && <QuizLogoAlura />}
    </div>
  );
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
    opacity: 0;
  }
`;

export default QuizLogo;
