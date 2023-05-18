import React, { useEffect, useState } from 'react'



const QuestionData = [
    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
    },

    {
        question:
        options:
        correctAnswer:
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

})
  return (
    <div>
      
    </div>
  )
}

export default Quiz
