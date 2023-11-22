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

const Answer = ({ onChange, index, choice, type, selectedAnswer }) => {
  // Convert index to alphabet character to show ABCD before question
  const label = String.fromCharCode(65 + index)

  return (
    <AnswerStyle key={index}>
      <AnswerLabel>
        <ChoiceLabel>{label}.</ChoiceLabel>
        <input
          name={choice}
          // radio is for checked one option and checkbox is for checked multiple options
          type={type === 'MAQs' ? 'checkbox' : 'radio'}
          checked={selectedAnswer && selectedAnswer.includes(choice)}
          onChange={onChange}
        />
        {choice}
      </AnswerLabel>
    </AnswerStyle>
  )
}

export default Answer