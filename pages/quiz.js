import React from 'react';
import db from '../db.json';
import QuizScreen from '../src/screens/Quiz';

const QuizPage = () => (
  <QuizScreen externalQuestions={db.questions} externalBg={db.bg} />
);

export default QuizPage;
