import { useEffect } from 'react'

import { useQuiz } from '../../context/QuizeContext'
import { ScreenTypes } from '../../types'

import QuestionScreen from '../questionScreen'
import QuizTopicsScreen from '../quizTopicsScreen'

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz()

  useEffect(() => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }, [setCurrentScreen])

  const screenComponents = {
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />
  }



  const ComponentToRender = screenComponents[currentScreen] || <QuestionScreen />

  return <>{ComponentToRender}</>
}

export default Main