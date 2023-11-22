/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from 'styled-components'

import { Flex } from '../../../style/Global'
import { device } from '../../../style/BreakPoints'
import { HighlightedText } from '../../../style/Global'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  justify-content: center;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
  }
`
const QuizHeader = ({ answer, goodanswer }) => {
  return (
    <Flex $gap="6px" center>
      <ResultOverviewStyle>
        <p>
          Your answer:{' '}
          <HighlightedText> {answer} </HighlightedText>{' '}

        </p>
        <p>
          Good answer:<HighlightedText> {goodanswer}</HighlightedText>
        </p>
      </ResultOverviewStyle>
    </Flex>
  )
}

export default QuizHeader