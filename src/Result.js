// Result.js

import React from 'react';

const Result = ({ correctAnswers, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Ergebnis</h2>
      <p>
        Du hast {correctAnswers} von {totalQuestions} Fragen richtig beantwortet.
      </p>
    </div>
  );
};

export default Result;
