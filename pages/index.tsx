import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

import db from '../db.json'
import Widget from '../src/components/Widget'
import Link from '../src/components/Link'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import BackgroundLeft from '../src/components/BackgroundLeft'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'
import { add, remove } from '../src/array-utils'
import alert from '../lotties/alert.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false }) as any
const MotionButton = motion<any>(Button)
const MotionLi = motion.li as any
const MotionFooter = motion<any>(Footer)
const MotionAnimatePresence = AnimatePresence as any

const style = {
  listStyle: 'none',
}

const widgetAnimate = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const widgetItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Notifications = styled.ul`
  position: fixed;
  bottom: 0;
  right: 20px;
  top: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
  z-index: 9999;
`

const NotificationsContent = styled.li`
  width: 300px;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  margin: 10px;
  flex: 0 0 100px;
  position: relative;
  border-radius: 10px;  
`

const MotionNotificationsContent = motion<any>(NotificationsContent)

export default function Home(): React.ReactElement {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const isEmptyName = name.length === 0

  const [notifications, setNotifications] = useState<number[]>([])

  return (
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundLeft>
        <QuizContainer>
          <QuizLogo quizDaGalera={false} />
          <Widget
            as={motion.section}
            variants={widgetAnimate}
            transition={{ delay: 0, duration: 0.5 }}
            initial="hidden"
            animate="visible"
          >
            <Widget.Header
              as={motion.section}
              variants={widgetItem}
              transition={{ delay: 0.3, duration: 0.7 }}
              initial="hidden"
              animate="visible"
            >
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content
              as={motion.section}
              variants={widgetItem}
              transition={{ delay: 0.5, duration: 1 }}
              initial="hidden"
              animate="visible"
            >
              <p>{db.description}</p>

              <form onSubmit={(e) => {
                e.preventDefault()

                router.push(`/quiz?name=${name}`)
              }}
              >
                <Input
                  name="nomeDoUsuaio"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  placeholder="Diz ai seu nome para jogar :)"
                  value={name}
                />
                <MotionButton
                  type="submit"
                  disabled={isEmptyName}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Jogar{' '}{!isEmptyName ? name : ''}
                </MotionButton>

              </form>
            </Widget.Content>
          </Widget>

          <Widget
            as={motion.section}
            variants={widgetAnimate}
            transition={{ delay: 0, duration: 0.5 }}
            initial="hidden"
            animate="visible"
          >
            <Widget.Header
              as={motion.section}
              variants={widgetItem}
              transition={{ delay: 0.3, duration: 0.7 }}
              initial="hidden"
              animate="visible"
            >
              <h1>Quizes da Galera</h1>
            </Widget.Header>

            <Widget.Content
              as={motion.section}
              variants={widgetItem}
              transition={{ delay: 0.5, duration: 1 }}
              initial="hidden"
              animate="visible"
            >
                {db.external.map((url, index) => {
                const indexLink = index

                const prepareUrl = url
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')

                const [projectName, gitHubUser] = prepareUrl.split('.')
                return (
                  <MotionLi
                    key={projectName}
                    style={style}
                    variants={widgetItem}
                    transition={{ delay: 0.5, duration: parseFloat(`0.${indexLink + 4}`) }}
                    initial="hidden"
                    animate="visible"
                  >
                    <Widget.Topic
                      as={Link}
                      href={isEmptyName ? '/' : `/quiz/${gitHubUser}__${projectName}?name=${name}`}
                      onClick={() => {
                        if (notifications.length === 0 && notifications.length < 2 && isEmptyName) {
                          setNotifications(add(notifications))
                        }
                      }}
                    >
                      {`${gitHubUser} / ${projectName}`}
                    </Widget.Topic>
                  </MotionLi>
                )
              })}
            </Widget.Content>

          </Widget>
          <MotionFooter
            variants={widgetAnimate}
            initial="hidden"
            animate="visible"
          />
        </QuizContainer>

        <Notifications>
          <MotionAnimatePresence initial={false}>
            {notifications.map((id) => (
              <MotionNotificationsContent
                key={id}
                positionTransition
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                onClick={() => { setNotifications(remove(notifications, id)) }}
              >
                <div style={{
                  paddingLeft: 10, paddingTop: 5, display: 'flex', flexWrap: 'wrap',
                }}
                >
                  <Lottie
                    style={{ width: 30, height: 30 }}
                    animationData={alert}
                  />
                  <p style={{ color: '#3F51B5', fontSize: 12, margin: 10 }}>Alerta AluraQuiz!</p>
                </div>
                <p style={{
                  color: '#3F51B5',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
                >
                  Por favor insirá o seu nome
                </p>
              </MotionNotificationsContent>
            ))}
          </MotionAnimatePresence>
        </Notifications>
      </BackgroundLeft>
      <GitHubCorner projectUrl="https://github.com/edilson-rodrigues/aluraquiz" />
    </QuizBackground>

  )
}
