// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { QuizContext } from './QuizeContext';
import { quiz } from '../data/QuizQuestions';

// eslint-disable-next-line react/prop-types
const QuizProvider = ({ children }) => {
  const initialState = {
    quizTopic: 'Word',
    result: [],
    currentScreen: 'SplashScreen',
  };

  const [quizTopic, setQuizTopic] = useState(initialState.quizTopic);
  const [currentScreen, setCurrentScreen] = useState(initialState.currentScreen);

  const [questions, setQuestions] = useState(quiz[initialState.quizTopic].questions)


  const selectQuizTopic = (topic) => {
    setQuizTopic(topic);
  };

  useEffect(() => {

  }, [quizTopic]);

  const quizDetails = {
    selectedQuizTopic: quizTopic,
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  

  const restartQuiz = () =>{
    setQuestions(quiz[initialState.quizTopic].questions)
    const shuffeledArray = shuffleArray(questions.map(item => item))
    setQuestions(shuffeledArray)
  }

  const quizContextValue = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    quizDetails,
    restartQuiz,
  }


  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;