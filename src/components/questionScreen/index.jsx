/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import { PageCenter } from '../../style/Global'

import styled from 'styled-components'
import { device } from '../../style/BreakPoints'

import Question from './question/question'
import QuizHeader from './header'

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
  const [checkedd, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const {
    questions,
    restartQuiz
  } = useQuiz()

  const currentQuestion = questions[activeQuestion]

  const { question, type, choices, code, image, correctAnswers } = currentQuestion


  const handleAnswerSelection = (e) => {
    if(!checkedd){
      const { name, checked } = e.target
        if (checked) {
          setSelectedAnswer([name])
        }
    }
  }

  const onClickNext = () => {
    setChecked(false)
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    }else{
      setActiveQuestion(0)
      restartQuiz()
    }
    setSelectedAnswer([])
  }

  const onClickCheck = () => {
    const isMatch =
    selectedAnswer.length === correctAnswers.length &&
    selectedAnswer.every((answer) => correctAnswers.includes(answer))

    setChecked(true)

    if(isMatch){
      setIsCorrect(true)
    }else{
      setIsCorrect(false)
    }
  }


  return (
    <PageCenter>
      <QuizContainer selectedAnswer={selectedAnswer.length > 0}>
        { checkedd && <QuizHeader
          answer={selectedAnswer}
          goodanswer={correctAnswers}
        />}
        <Question
            question={question}
            code={code}
            image={image}
            choices={choices}
            type={type}
            handleAnswerSelection={handleAnswerSelection}
            selectedAnswer={selectedAnswer}
          />

        <ButtonWrapper>
          {checkedd ?           
            <Button
              text={'Next'}
              onClick={onClickNext}
              disabled={selectedAnswer.length === 0}
            /> 
            : 
            <Button
            text={'Check'}
            onClick={onClickCheck}
            disabled={selectedAnswer.length === 0}
          />
          
          }

        </ButtonWrapper>
      </QuizContainer>
    </PageCenter>
  )
}

export default QuestionScreen