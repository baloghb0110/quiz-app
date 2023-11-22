/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import { PageCenter } from '../../style/Global'

import styled from 'styled-components'
import { device } from '../../style/BreakPoints'

import Question from './question/question'

import { useQuiz } from '../../context/QuizeContext'
import { ScreenTypes } from '../../types'

import Button from '../ui/button'

const QuizContainer = styled.div`
  width: 900px;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  padding: 30px 60px 80px 60px;
  margin-bottom: 70px;
  position: relative;
  @media ${device.md} {
    width: 100%;
    padding: 15px 15px 80px 15px;
  }
  button {
    span {
      svg {
        path {
          fill: ${({ selectedAnswer, theme }) =>
            selectedAnswer ? `${theme.colors.buttonText}` : `${theme.colors.darkGray}`};
        }
      }
    }
  }
`
const ButtonWrapper = styled.div`
  position: absolute;
  right: 60px;
  bottom: 30px;
  display: flex;
  gap: 20px;
  @media ${device.sm} {
    justify-content: flex-end;
    width: 90%;
    right: 15px;
  }
`

const QuestionScreen = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState([])
  const [showResultModal, setShowResultModal] = useState(false)

  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
  } = useQuiz()

  const currentQuestion = questions[activeQuestion]

  const { question, type, choices, code, image, correctAnswers } = {
    question:
      'Which of the following are JavaScript data types? (Select all that apply)',
    choices: ['String', 'Number', 'Function', 'Array'],
    type: 'MCQs',
    correctAnswers: ['String'],
    score: 10,
  }

  const handleAnswerSelection = (e) => {
    const { name, checked } = e.target
      if (checked) {
        setSelectedAnswer([name])
      }
  }

  return (
    <PageCenter>
      <QuizContainer selectedanswer={selectedAnswer.length > 0}>
        <Question
            question={question}
            code={code}
            image={image}
            choices={choices}
            type={type}
            handleAnswerSelection={handleAnswerSelection}
            selectedanswer={selectedAnswer}
          />
      </QuizContainer>
    </PageCenter>
  )
}

export default QuestionScreen