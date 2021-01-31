import React from 'react';
/* Desafio da Ju: Pegue o query param name e exiba o nome da pessoa... */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Widget from '../Widget';
import Button from '../Button';

const CircleQuestion = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-radius: 50%;
  display: inline-block;
`;

const CenterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.contrastText};
  border: none;
`;

const ResultWidget = ({ results }) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>
      <Widget.Content>
        <div>
          <p>
            Mandou bem,
            {' '}
            {/* Desafio da Ju: Pegue o query param name e exiba o nome da pessoa...  */}
            {name}
            .
            {' '}
            { }
          </p>
          <h2>
            Você fez
            {' '}

            {/* usando o reduce */}
            {/* {results.reduce((somatoriaAtual, resultAtual) => {
              const isCorrect = resultAtual === true;
              if (isCorrect) {
                return somatoriaAtual + 100;
              }
              return somatoriaAtual;
            }, 0)} */}

            {/* usando o filter */}
            {results.filter((x) => x).length}
            00
            {' '}
            pontos, parabéns!

          </h2>
        </div>
        <Widget>
          <Widget.Content>
            {results.map((result, resultIndex) => {
              const index = resultIndex;
              return (
                <Widget.Topic key={index}>
                  {/* number questions */}
                  <CircleQuestion>
                    <CenterItem>
                      {`${index.toString().length > 1
                        ? index + 1
                        : `0${index + 1}`} 
                    `}
                    </CenterItem>

                  </CircleQuestion>

                  {` Questão: ${result === true
                    ? 'Acertou'
                    : 'Errou'}`}

                </Widget.Topic>
              );
            })}
            {results}
          </Widget.Content>
        </Widget>
        <Button
          type="button"
          onClick={() => router.push('/')}
        >
          Voltar para home
        </Button>
      </Widget.Content>
    </Widget>
  );
};

export default ResultWidget;
