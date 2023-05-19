import React from 'react'

const QuizQuestion = ({ question, options, selectOption, onOptionSelect }) => (
<div>
    <h2>Question:</h2>
<p>{question}</p>
<h2>Options:</h2>
{options.map(option => (
    <label key={option}>
        <input
        type='radio'
        name='option'
        value={option}
        checked={selectOption === option}
        onChange={() => onOptionSelect(option)}
        />
        {option}
    </label>
    ))}
</div>
);
  

export default QuizQuestion
{ question, options, selectOption, onOptionSelect }