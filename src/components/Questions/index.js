import React from 'react';
import Widget from '../Widget';
import Button from '../Button';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  handleSubmit,
}) => {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {` Pergunta ${questionIndex + 1} de ${totalQuestions}`}
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
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic
                key={alternative}
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>{JSON.stringify(question, null, 4)}</pre>
 */}
          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
