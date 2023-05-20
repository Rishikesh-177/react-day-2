import React from 'react'

const QuizQuestion = ({ question, options, selectOption, onOptionSelect }) => (
<div>
    <h2>Question:</h2>
<p>{question}</p>
<h2>Options:</h2>
{options.map(option => (
    <label key={option.value}>
        <input
        type='radio'
        name='option'
        value={option.value}
        checked={selectOption === option.value}
        onChange={() => onOptionSelect(option.value)}
        />
        {option.label}
    </label>
    ))}
</div>
);
  

export default QuizQuestion;
