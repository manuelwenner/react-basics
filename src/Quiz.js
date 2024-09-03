// Quiz.js

import React from 'react';


const Quiz = ({ currentQuestion, handleAnswer, questions }) => {
  if (currentQuestion >= questions.length) {
    return <div>Quiz abgeschlossen</div>;
  }

  const question = questions[currentQuestion];

  const handleClick = (answer) => {
    const isCorrect = answer === question.correctAnswer;
    handleAnswer(isCorrect);
  };

  return (
    <div>
      <h2>Frage {currentQuestion + 1}</h2>
      <p>{question.question}</p>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => handleClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
