import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import QuestionWidget, { Question } from '../../components/Questions';
import LoadingWidget from '../../components/Spinner';
import ResultWidget from '../../components/ResultWidget';
import BackgroundLeft from '../../components/BackgroundLeft';

const screenStates = {
  QUIZ: 'QUIZ' as const,
  LOADING: 'LOADING' as const,
  RESULT: 'RESULT' as const,
};

interface Props {
  externalQuestions: Question[];
  externalBg: string;
}

const QuizPage: React.FC<Props> = ({ externalQuestions, externalBg }) => {
  const [screenState, setScreenState] = useState<typeof screenStates[keyof typeof screenStates]>(screenStates.LOADING);
  const [results, setResults] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  const router = useRouter();
  const logo = Boolean(router.query?.id && String(router.query.id).length > 0);

  const addResult = useCallback((result: boolean) => {
    setResults((prev) => [...prev, result]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  const handleSubmitQuiz = useCallback(() => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }, [questionIndex, totalQuestions]);

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

          {screenState === screenStates.RESULT && (
            <ResultWidget results={results} />
          )}
        </QuizContainer>
      </BackgroundLeft>
    </QuizBackground>
  );
};

export default QuizPage;
