import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

/* */

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('Edilson');
  const isEmptyName = name.length === 0;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={(e) => {
              e.preventDefault();

              router.push(`/quiz?name=${name}`);

              // router manda para proxima pagina
            }}
            >
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz ai seu nome para jogar :)"
              />
              <button type="submit" disabled={isEmptyName}>
                Jogar
                {' '}
                {!isEmptyName ? name : ''}
              </button>

            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/edilson-rodrigues/aluraquiz" />
    </QuizBackground>
  );
}
