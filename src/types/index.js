import { createContext, useContext } from 'react';

export const ScreenTypes = {
  SplashScreen: 0,
  QuestionScreen: 1,
};

export const QuizContext = createContext({
  currentScreen: ScreenTypes.SplashScreen,
  setCurrentScreen: () => { },
  quizTopic: 'React',
  selectQuizTopic: () => { },
  questions: [],
  setQuestions: () => { },
  result: [],
  setResult: () => { },
  timer: 15,
  setTimer: () => { },
  endTime: 0,
  setEndTime: () => { },
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: 'React',
  },
});

export function useQuiz() {
  return useContext(QuizContext);
}
