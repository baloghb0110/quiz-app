// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { QuizContext } from './QuizeContext';

// eslint-disable-next-line react/prop-types
const QuizProvider = ({ children }) => {
  const initialState = {
    quizTopic: 'React',
    result: [],
    currentScreen: 'SplashScreen',
  };

  const [quizTopic, setQuizTopic] = useState(initialState.quizTopic);
  const [result, setResult] = useState(initialState.result);
  const [currentScreen, setCurrentScreen] = useState(initialState.currentScreen);

  const [questions, setQuestions] = useState(0)


  const selectQuizTopic = (topic) => {
    setQuizTopic(topic);
  };

  useEffect(() => {

  }, [quizTopic]);

  const quizDetails = {
    selectedQuizTopic: quizTopic,
  };

  const quizContextValue = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
  }

  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;