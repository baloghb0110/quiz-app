/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from 'styled-components'

import { device } from '../../../style/BreakPoints'

import Answer from '../answer/answer'

const QuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 88%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const AnswersContainer = styled.div`
  max-width: 78%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`

const Question = ({
  question,
  code,
  image,
  type,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  return (
    <>
    <QuestionContainer>
          <QuestionStyle>{question}</QuestionStyle>
          {/* if question contains code snippet then show code */}
          <AnswersContainer>
            {choices.map((choice, index) => (
              <Answer
                choice={choice}
                index={index}
                key={index}
                onChange={(e) => handleAnswerSelection(e, index)}
                type={type}
                selectedanswer={selectedAnswer}
              />
            ))}
          </AnswersContainer>
        </QuestionContainer>
    </>
  )
}

export default Question