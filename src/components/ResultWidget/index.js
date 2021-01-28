import React from 'react';
import Widget from '../Widget';
import Button from '../Button';

const ResultWidget = ({ results }) => (
  <Widget>
    <Widget.Header>
      Resultado
    </Widget.Header>
    <Widget.Content>
      <div>
        <p>Mandou bem, name</p>
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
                {`#${index.toString().length > 1
                  ? index + 1
                  : `0${index + 1}`} 
                    `}

                {`Resultado: ${result === true
                  ? 'Acertou'
                  : 'Errou'}`}

              </Widget.Topic>
            );
          })}
          {results}
        </Widget.Content>
      </Widget>
      <Button type="submit">ADICIONAR AO MEU PROJETO</Button>
      <p>Voltar para a home</p>
    </Widget.Content>
  </Widget>
);

export default ResultWidget;
