import React, { useEffect, useState } from 'react';
import QuizQuestion from '../molecules/QuizQuestion';
import Button from '../atoms/Button';



const questionsData = [
    {
        question:'What is React?',
        options: [{ A:'A programming Lanuage', B: 'A javaScript library for user interface', C: 'A database management system', D: 'A design framework'}],
        correctAnswer:' B'
    },

    {
        question:'What is JSX in React',
        options: [{A:'javaScript XML', B: 'javaScript Extension', C: 'java Syntax XML', D: 'java Scripted XML' }],
        correctAnswer: 'A'
    },

   { question: 'What is the virtual DOM in React?',
options: [{A: 'A real-time representation of the server-side DOM',
    B: 'An abstract representation of the browsers DOM',
    C: 'A debugging tool for React components',
    D: 'A file format used for storing React components'}],
        correctAnswer: 'B'
    },

    {
        question: 'What are the key features of React?',
        options: [{A: 'Component reusability and virtual DOM',
            B: 'Two-way data binding and dependency injection',
            C: 'Object-oriented programming and type checking',
            D: 'Server-side rendering and template engines'}],
        correctAnswer: 'A'
    },

    {
        question: 'What is the purpose of state in React ?',
        options:[{A: 'To manage data that can change over time',
            B: 'To define the structure of a React component',
            C: 'To store global variables accessible to all components',
            D: 'To handle routing and navigation within a React app'}],
        correctAnswer: 'A'
    },

    {
        question: 'What are React components ?',
        options:[{A: 'Functional units of a React app that encapsulate logic and UI',
            B: 'Built-in HTML elements like div and span',
            C: 'External libraries used for styling React apps',
            D: 'JavaScript functions used for creating React elements'}],
        correctAnswer: 'A'
    },

    {
        question: 'What is the difference between functional components and class components in React?',
        options:[{A: 'Functional components have lifecycle methods, while class components dont',
        B: 'Class components can have local state, while functional components cant',
        C: 'Functional components use hooks, while class components use inheritance',
        D: 'There is no difference; they are two ways of defining the same thing'}],
        correctAnswer: 'C'
    },

    {
        question: 'What are React hooks? Provide some examples.',
        options: [{A: 'Functions that enable stateful logic in functional components',
            B: 'Pre-built UI components provided by the React library',
            C: 'Methods used for routing in React applications',
            D: 'Event handlers for handling user interactions in React app'}],
        correctAnswer: 'A'
    },

    {
        question: 'How does React handle events?',
        options: [{A:' By using inline event handlers within JSX',
            B: 'By attaching event listeners to DOM elements',
            C: 'By automatically detecting and handling events',
            D: 'By relying on the browsers native event handling mechanism'}],
        correctAnswer: 'B'
    },

    {
        question: 'How can you pass data from a parent component to a child component in React?',
        options: [{A: 'By using props',
            B: 'By using context API',
            C: 'By using state management libraries like Redux',
            D: 'By directly accessing the parent components state'}],
        correctAnswer:'A'
    },
]

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectOptions, setSelectOptions] = useState([]);
const [showResult, setShowResult] = useState(false);
const [score, setScore] = useState(0);
const [timer, setTimer] = useState(600); //10 minutes in seconds

useEffect(() => {
    //start the timer
const interval = setInterval(() => {
    setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // clear the timer when it reaches 0
    if (timer === 0) {
        clearInterval(interval);
        handleSubmit();
    }

    //clean up the interval on component unmount
    return () => clearInterval(interval);
}, [timer, handleSubmit]);

const handleOptionSelect = option => {
    const updatedOptions = [...selectOptions];
    updatedOptions[currentQuestion] = option;
    setSelectOptions(updatedOptions);
};

const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
         } else {
            setShowResult(true);
        }
};

const handleSubmit = () => {
    let totalScore = 0;
    selectOptions.forEach((option, index) => {
        if (option === questionsData[index].correctAnswer) {
            totalScore += 2;
            }
    });
    setScore(totalScore);
    setShowResult(true);
};

const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectOptions([]);
    setShowResult(false);
    setScore(0);
    setTimer(600);
};


  return (
    <div>
      {!showResult ? (
        <>
        <h1>Quiz App</h1>
<p>Timer: {Math.floor(timer / 60)}:{timer % 60}</p> 
<QuizQuestion
question={questionsData[currentQuestion].question}
options={questionsData[currentQuestion].options}
selectedOptions={selectOptions[currentQuestion]}
onOptionSelect={handleOptionSelect}
/>
<Button onClick={handleNext}>
            {currentQuestion === questionsData.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </>
      ) : (
        <>
          <h1>Quiz Result</h1>
          <p>Your score: {score}/20</p>
          {score >= 12 ? (
            <p>Congratulations! You passed the test.</p>
          ) : (
            <p>Sorry! You failed the test.</p>
          )}
          <Button onClick={handleRestart}>Restart Test</Button>
        </>
      )}
    </div>
  );
};

export default Quiz;


        
        
        
   
