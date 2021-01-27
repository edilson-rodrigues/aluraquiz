import React, { useState, useEffect } from 'react';

/* */

import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import LoadingWidget from '../src/components/Spinner';
import QuestionWidget from '../src/components/Questions';
import Winner from '../src/components/Winner';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  // [React chama de: Efeitos || Effects]
  useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    // nasce === didMount
  }, []);

  // atualizado === willUpdate
  // morre === willUnmount

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            handleSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <Winner />}

      </QuizContainer>
    </QuizBackground>
  );
};
export default QuizPage;
