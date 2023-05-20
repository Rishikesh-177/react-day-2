import React, { useEffect, useState } from 'react';
import QuizQuestion from '../molecules/QuizQuestion';
import Button from '../atoms/Button';



const questionsData = [
    {
        question:'What is React?',
        options: [
            { label: 'A programming Lanuage', value: 'A' },
            { label: 'A javaScript library for user interface',value: 'B'}, 
            { label: 'A database management system', value: 'C'}, 
            { label: 'A design framework', value: 'D'},
        ],
        correctAnswer:' B',
    },

    {
        question:'What is JSX in React',
        options: [
            { label:'javaScript XML', value: 'A'},
            { label: 'javaScript Extension', value: 'B'},
             { label: 'java Syntax XML',value: 'C'},
              { label: 'java Scripted XML', value: 'D' },],
        correctAnswer: 'A'
    },

   { question: 'What is the virtual DOM in React?',
options: [
    { label: 'A real-time representation of the server-side DOM',  value: 'A'},
{ label: 'An abstract representation of the browsers DOM', value: 'B'},
{ label: 'A debugging tool for React components', value: 'C'},
{ label: 'A file format used for storing React components', value: 'D'},],
        correctAnswer: 'B'
    },

    {
        question: 'What are the key features of React?',
        options: [
            { label: 'Component reusability and virtual DOM', value: 'A'},
         { label: 'Two-way data binding and dependency injection', value: 'B'},
        { label: 'Object-oriented programming and type checking', value: 'C'},
        { label: 'Server-side rendering and template engines',value: 'D'},
    ],
        correctAnswer: 'A'
    },

    {
        question: 'What is the purpose of state in React ?',
        options:[
            { label: 'To manage data that can change over time', value: 'A'},
        { label: 'To define the structure of a React component', value: 'B'},
        { label: 'To store global variables accessible to all components', value: 'C'},
        { label: 'To handle routing and navigation within a React app', value: 'D'},
    ],
        correctAnswer: 'A'
    },

    {
        question: 'What are React components ?',
        options:[
            { label: 'Functional units of a React app that encapsulate logic and UI', value: 'A'},
        { label: 'Built-in HTML elements like div and span', value: 'B'},
        { label: 'External libraries used for styling React apps', value: 'C'},
        { label: 'JavaScript functions used for creating React elements', value: 'D'},
    ],
        correctAnswer: 'A'
    },

    {
        question: 'What is the difference between functional components and class components in React?',
        options:[
            { label: 'Functional components have lifecycle methods, while class components dont', value: 'A'},
       { label: 'Class components can have local state, while functional components cant', value: 'B'},
        { label: 'Functional components use hooks, while class components use inheritance', value: 'C'},
       { label: 'There is no difference; they are two ways of defining the same thing', value: 'D'},
    ],
        correctAnswer: 'C'
    },

    {
        question: 'What are React hooks? Provide some examples.',
        options: [
            { label: 'Functions that enable stateful logic in functional components', value: 'A'},
        { label: 'Pre-built UI components provided by the React library', value: 'B'},
        { label: 'Methods used for routing in React applications', value: 'C'},
        { label: 'Event handlers for handling user interactions in React app', value: 'D'},
    ],
        correctAnswer: 'A'
    },

    {
        question: 'How does React handle events?',
        options: [{label:' By using inline event handlers within JSX',value: 'A'},
       { label: 'By attaching event listeners to DOM elements', value: 'B'},
        { label: 'By automatically detecting and handling events', value: 'C'},
        { label: 'By relying on the browsers native event handling mechanism', value: 'D'},
    ],
        correctAnswer: 'B'
    },

    {
        question: 'How can you pass data from a parent component to a child component in React?',
        options: [
            { label: 'By using props', value: 'A'},
        { label: 'By using context API', value: 'B'},
       { label: 'By using state management libraries like Redux', value: 'C'},
        { label: 'By directly accessing the parent components state', value: 'D'}
    ],
        correctAnswer:'A'
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectOptions, setSelectOptions] = useState([]);
const [showResult, setShowResult] = useState(false);
const [score, setScore] = useState(0);
const [timer, setTimer] = useState(600); //10 minutes in seconds

useEffect(() => {
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



    //start the timer
const interval = setInterval(() => {
    setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // clear the timer when it reaches 0
    if (timer === 0) {
        clearInterval(interval);
        handleSubmit();
    }

    //clean up the interval on component unmount
    return () => clearInterval(interval);
}, [timer, selectOptions]);

const handleOptionSelect = (option) => {
    const updatedOptions = [...selectOptions];
    updatedOptions[currentQuestion] = option;
    setSelectOptions(updatedOptions);
    
};

const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
         } else {
            setShowResult(true);
        }
};


   
const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectOptions([]);
    setShowResult(false);
    setScore(0);
    setTimer(600);
};

const currentQuestionData = questionsData[currentQuestion];

  return (
    <div>
      {!showResult ? (
        <>
        <h1>Quiz App</h1>
<p>Timer: {Math.floor(timer / 60)}:{timer % 60}</p> 
<QuizQuestion
question={currentQuestionData.question}
options={currentQuestionData.options}
// selectedOption={selectOptions[currentQuestion]}
onOptionSelect={handleOptionSelect}
/>
<Button onClick={handleNext}
           text= {currentQuestion === questionsData.length - 1 ? 'Submit' : 'Next'}
          />
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
          <Button onClick={handleRestart} text="Restart Test" />
        </>
      )}
    </div>
  );
};

export default Quiz;


        
        
        
   
