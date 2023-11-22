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
  type,
  choices,
  needCheck,
  sAnswer,
  handleAnswerSelection,
  gAnswer,
  }) => {

  return (
    <>
    <QuestionContainer>
      <QuestionStyle>{question}</QuestionStyle>

      <AnswersContainer>
        {needCheck && choices.map((choice, index) => {
          let wrong = true;
          if(gAnswer.includes(sAnswer)){
            wrong = false
          }
          return (
            <Answer
              choice={choice}
              index={index}
              key={index}
              onChange={(e) => handleAnswerSelection(e, index)}
              type={type}
              sAnswer={sAnswer}
              correct={choice.includes(gAnswer)}
              wrong={wrong && !choice.includes(gAnswer) && choice.includes(sAnswer)}
            />
          )         
        })}

        {
        
        }

        {!needCheck && choices.map((choice, index) => {
          const correct = needCheck && sAnswer.includes(choice) && gAnswer.includes(choice)
          const wrong = needCheck && sAnswer.includes(choice) && !gAnswer.includes(choice)

          return (
            <Answer
              choice={choice}
              index={index}
              key={index}
              onChange={(e) => handleAnswerSelection(e, index)}
              type={type}
              sAnswer={sAnswer}
              correct={correct}
              wrong={wrong}
            />
          )
        })}        
      </AnswersContainer>
    </QuestionContainer>
    </>
  )
}

export default Question