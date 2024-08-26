import './Quiz.css';
import React, { useState } from 'react';

// Default data in case props are not passed correctly
const defaultData = [
  { question: 'How do you say "Hello" in Spanish?', options: ['Hola', 'Adiós', 'Por favor', 'Gracias'], answer: 'Hola' },
  { question: 'How do you say "One" in Yoruba?', options: ['Ọkan', 'Mẹta', 'Mẹrin', 'Marun'], answer: 'Ọkan' },
  { question: 'How do you say "Thank you" in French?', options: ['Merci', 'Bonjour', 'Bonsoir', 'Salut'], answer: 'Merci' },
];

const Quiz = ({ data = defaultData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Ensure data is not undefined and has at least one question
  if (!data || data.length === 0) {
    return <div>No quiz data available.</div>;
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {data.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{data.length}
            </div>
            <div className="question-text">{data[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {data[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option === data[currentQuestionIndex].answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;