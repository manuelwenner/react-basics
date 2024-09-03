import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Quiz from './Quiz';
import Result from './Result';
import { questions } from './quizData';
import Home from './Home';
import Wackelkopf from './Wackelkopf';


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };


  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/quiz">Fragen</Link></li>
              <li><Link to="/result">Antworten</Link></li>
              <li><Link to="/wackelkopf">Wackelkopf</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/quiz"
              element={<Quiz currentQuestion={currentQuestion} questions={questions} handleAnswer={handleAnswer} />}
            />
            <Route
              path="/result"
              element={<Result correctAnswers={correctAnswers} totalQuestions={questions.length} />}
            />
            <Route
              path="/wackelkopf"
              element={<Wackelkopf />}
            />
          </Routes>

        </Router>

      </header>
    </div>
  );
}

export default App;
