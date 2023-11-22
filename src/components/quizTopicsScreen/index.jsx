import styled from 'styled-components'
import { useQuiz } from '../../context/QuizeContext'
import { quizTopics } from '../../data/quizTopics'
import { device } from '../../style/BreakPoints'
import {
  CenterCardContainer,
  PageCenter,
} from '../../style/Global'


import { ScreenTypes } from '../../types'

import Button from '../ui/button'

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  @media ${device.md} {
    row-gap: 20px;
    column-gap: 20px;
    max-width: 100%;
  }
`


const SelectButton = styled.div`
  background-color: ${({ disabled, theme }) =>
    disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.themeColor}`
      : `1px solid ${theme.colors.disabledButton}`};
  transition: background-color 0.4s ease-out;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`

const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`

const QuizTopicsScreen= () => {
  // eslint-disable-next-line no-unused-vars
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }


  return (
    <PageCenter>
      <CenterCardContainer>
        <DetailText>Select topic below to start your Quiz.</DetailText>
        <SelectButtonContainer>
          {quizTopics.map(({ title, disabled }) => (
            <SelectButton
              key={title}
              active={quizTopic === title}
              onClick={() => !disabled && selectQuizTopic(title)}
              disabled={disabled}
            >
              <SelectButtonText>{title}</SelectButtonText>
            </SelectButton>
          ))}
        </SelectButtonContainer>
        <Button text="Continue" onClick={goToQuizDetailsScreen} bold />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen