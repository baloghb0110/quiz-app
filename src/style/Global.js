import styled, { createGlobalStyle, css } from 'styled-components';
import { device } from './BreakPoints';
import fontsCss from './font.module.css';

export const GlobalStyles = createGlobalStyle`
  ${fontsCss} /* this works as a normal styled css */
  
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.fonts.anekMalayalam}, sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.themeText};
    background: ${({ theme }) => theme.colors.background};
    line-height: 1;
    overflow-x: hidden;
    position: relative;
  }
  
  /* Rest of the global styles... */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.paddings.container};
`;

export const Box = styled.div`
  margin-top: calc(${({ mt }) => mt} * 1px);
  ${({ flxRight }) =>
    flxRight &&
    css`
      display: flex;
      justify-content: flex-end;
    `}
`;

export const PageCenter = styled.div`
  background: ${({ light, theme }) =>
    light ? `${theme.colors.background}` : `${theme.colors.themeGradient}`};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 50px;
  ${({ justifyCenter }) =>
    justifyCenter &&
    css`
      justify-content: center;
    `}
`;

export const Flex = styled.div`
  display: flex;
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `}
  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${({ flxEnd }) =>
    flxEnd &&
    css`
      justify-content: flex-end;
      align-items: center;
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
`;

export const CenterCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  min-width: 773px;
  min-height: 620px;
  padding: 50px 10px 60px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.md} {
    min-width: 100%;
  }
`;

export const ResizableBox = styled.div`
  width: ${(props) =>
    typeof props.width === 'string' ? props.width : `${props.width}px`};
`;

export const HighlightedText = styled.span`
  color: ${({ themeText, theme }) =>
    themeText ? theme.colors.themeText : theme.colors.themeColor};
`
