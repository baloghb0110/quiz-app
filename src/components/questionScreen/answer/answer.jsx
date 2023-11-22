/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components'

import { device } from '../../../style/BreakPoints'

const AnswerStyle = styled.div`
  font-size: clamp(18px, 4vw, 16px);
  color: ${({ theme }) => theme.colors.secondaryText};
  font-weight: 400;
  border: 1px solid
    ${({ highlightAnswer, theme }) =>
      highlightAnswer ? `${theme.colors.themeColor}` : `${theme.colors.border}`};
  background-color: ${({ highlightAnswer, theme }) =>
    highlightAnswer ? `${theme.colors.selectedAnswer}` : `${theme.colors.answerBg}`};
  border-radius: 16px;
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);
  cursor: pointer;
  ${({ highlightAnswer }) =>
    highlightAnswer &&
    css`
      transition: border 0.2s ease-in;
    `}
  @media ${device.md} {
    font-weight: 500;
  }

  // if user answer matches to correct answer make answer background success color otherwise danger color
  ${({ correct }) =>
    correct &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.success};
      background-color: ${({ theme }) => theme.colors.successLight};
    `}

  ${({ wrong }) =>
    wrong &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
      background-color: ${({ theme }) => theme.colors.dangerLight};
    `}

  input {
    visibility: hidden;
    margin: 0;
  }
`

const AnswerLabel = styled.label`
  padding: 18px;
  display: flex;
  cursor: pointer;
  @media ${device.md} {
    padding: 14px;
  }
`

const ChoiceLabel = styled.span``

const Answer = ({ onChange, index, choice, type, sAnswer, correct, wrong }) => {
  // Convert index to alphabet character to show ABCD before question
  const label = String.fromCharCode(65 + index)

  return (
    <AnswerStyle key={index} correct={correct} wrong={wrong} highlightAnswer={sAnswer.includes(choice)}>
      <AnswerLabel>
        <ChoiceLabel>{label}.</ChoiceLabel>
        <input
          name={choice}
          // radio is for checked one option and checkbox is for checked multiple options
          type={type === 'MAQs' ? 'checkbox' : 'radio'}
          checked={sAnswer.includes(choice)}
          onChange={onChange}
        />
        {choice}
      </AnswerLabel>
    </AnswerStyle>
  )
}

export default Answer