import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/* */

import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import QuestionWidget from '../../components/Questions';
import LoadingWidget from '../../components/Spinner';
import ResultWidget from '../../components/ResultWidget';
import BackgroundLeft from '../../components/BackgroundLeft';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage = ({ externalQuestions, externalBg }) => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  const router = useRouter();
  const logo = router.query?.id?.length > 0;

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
    // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <BackgroundLeft>
        <QuizContainer>
          <QuizLogo quizDaGalera={logo} />
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}

          {screenState === screenStates.LOADING && <LoadingWidget />}

          {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        </QuizContainer>
      </BackgroundLeft>
    </QuizBackground>
  );
};

export default QuizPage;
