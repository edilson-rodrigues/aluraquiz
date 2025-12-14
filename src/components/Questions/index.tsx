import React, { useState } from 'react';
import styled from 'styled-components';
import Widget from '../Widget';
import Button from '../Button';
import BackLinkArrow from '../BackLinkArrow';
import AlternativesForm from '../AlternativesForm';

const CenterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Potta One', cursive;
`;

export interface Question {
  image: string;
  title: string;
  description: string;
  alternatives: string[];
  answer: number;
}

interface Props {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: () => void;
  addResult: (isCorrect: boolean) => void;
}

const QuestionWidget: React.FC<Props> = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState<number | undefined>(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />

        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento: React.FormEvent<HTMLFormElement>) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                  checked={isSelected}
                />
                {isQuestionSubmited
                  && isCorrect
                  && isSelected
                  ? <CenterText>Você acertou</CenterText>
                  : isCorrect && alternative}

                {isQuestionSubmited
                  && !isCorrect
                  && isSelected
                  ? <CenterText>Você errou!</CenterText>
                  : !isCorrect && alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
