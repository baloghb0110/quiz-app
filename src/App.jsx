import { ThemeProvider } from 'styled-components'

import QuizProvider from './context/QuizeProvider'

import Main from './components/main'

import { GlobalStyles } from './style/Global'
import { themes } from './style/theme'

import './App.css'

function App() {

  const theme = themes.dark

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QuizProvider>
        <Main />
      </QuizProvider>
    </ThemeProvider>
  )
}

export default App
