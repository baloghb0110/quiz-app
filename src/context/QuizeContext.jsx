import { createContext, useContext } from 'react';

const initialState = {
  currentScreen: 'SplashScreen',
  setCurrentScreen: () => { },
  quizTopic: 'React',
  selectQuizTopic: () => { },
  questions: [],
  setQuestions: () => { },
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: 'React',
  },
};

export const QuizContext = createContext(initialState);

export function useQuiz() {
  return useContext(QuizContext);
}