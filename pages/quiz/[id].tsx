import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz'
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
  dbExterno: any
}

const QuizDaGaleraPage: React.FC<Props> = ({ dbExterno }) => (
  <ThemeProvider theme={dbExterno?.theme ?? {}}>
    <QuizScreen
      externalQuestions={dbExterno?.questions ?? []}
      externalBg={dbExterno?.bg ?? ''}
    />
  </ThemeProvider>
)

export default QuizDaGaleraPage

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.query.id as string
  const parts = id?.split('__') ?? []
  const gitHubUser = parts[0] ?? ''
  const projectName = parts[1] ?? ''

  try {
    const serverResponse = await fetch(
      `https://${projectName}.${gitHubUser}.vercel.app/api/db`,
    )

    if (!serverResponse.ok) {
      return { props: { dbExterno: null } }
    }

    const dbExterno = await serverResponse.json()

    return {
      props: {
        dbExterno,
      },
    }
  } catch (error) {
    return {
      props: {
        dbExterno: null,
      },
    }
  }
}
