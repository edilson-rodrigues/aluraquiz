import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

const QuizDaGaleraPage = ({ dbExterno }) => (
  <ThemeProvider theme={dbExterno.theme}>
    <QuizScreen
      externalQuestions={dbExterno.questions}
      externalBg={dbExterno.bg}
    />
  </ThemeProvider>
);

/* <div>
      Desafio da próxima aula junto com as animações
    </div> */

/* <pre style={{ color: 'black' }}>{JSON.stringify(dbExterno.questions, null, 4)}</pre> */

export default QuizDaGaleraPage;

export async function getServerSideProps(context) {
  // console.log('infos que o next da para nós', context.query.id);
  const [gitHubUser, projectName] = context.query.id.split('__');

  try {
    const dbExterno = await fetch(
      `https://${projectName}.${gitHubUser}.vercel.app/api/db`,
    )
      .then((serverResponse) => {
        if (serverResponse.ok) {
          return serverResponse.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((jsonResponse) => jsonResponse)
      .catch(() => {
        /* error fetching external db */
      });

    return {
      props: {
        dbExterno,
      },
    };
  } catch (error) {
    throw new Error(error);
    // redirect ...
  }
}
