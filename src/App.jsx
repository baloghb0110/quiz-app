import { useState } from 'react'
import { ThemeProvider } from 'styled-components'


import { GlobalStyles } from './style/Global'
import { themes } from './style/Theme'

import './App.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  const theme = themes.light

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

    </ThemeProvider>
  )
}

export default App
