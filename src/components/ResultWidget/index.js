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

const pointStyle = { textAlign: 'center', fontFamily: 'Potta One' };
const fontResult = { fontFamily: 'Potta One' };

const PointSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemColumn = styled.div`
  display: flex;  
  flex-direction: column;
`;

const ResultWidget = ({ results }) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Widget>
      <Widget.Header>
        <div style={fontResult}>Resultado</div>
      </Widget.Header>
      <Widget.Content>
        <div>
          <p>
            Mandou bem,
            {' '}
            {/* Desafio da Ju: Pegue o query param name e exiba o nome da pessoa...  */}
            <span style={fontResult}>{name}</span>
            .
            {' '}
            { }
          </p>
          <h2>
            Você fez
            {' '}
            <span style={fontResult}>
              {results.filter((x) => x).length}
              00

            </span>
            {' '}
            pontos,
            <span style={fontResult}>
              {' '}
              Parabéns!
            </span>
          </h2>
        </div>
        <Widget>
          <Widget.Content>
            {results.map((result, resultIndex) => {
              const index = resultIndex;
              return (
                <Widget.Topic key={index}>
                  {/* number questions */}

                  <PointSpace>
                    <CircleQuestion>
                      <div style={pointStyle}>
                        {`${index.toString().length > 1
                          ? index + 1
                          : `0${index + 1}`} 
                    `}
                      </div>
                    </CircleQuestion>
                    <ItemColumn>
                      <div style={pointStyle}>
                        {`${result
                          ? '100'
                          : '0'}`}
                      </div>
                      <div>
                        pontos
                      </div>
                    </ItemColumn>
                  </PointSpace>
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
