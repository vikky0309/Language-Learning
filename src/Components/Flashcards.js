import React, { useState } from 'react';
import './Flashcards.css';

const words = [
  { id: 1, word: 'Hello', translation: 'Hola', image: 'hello.jpg', audio: 'hello.mp3' },
  { id: 2, word: 'Goodbye', translation: 'Adiós', image: 'goodbye.jpg', audio: 'goodbye.mp3' },
  { id: 3, word: 'Please', translation: 'Por favor', image: 'please.jpg', audio: 'please.mp3' },
  { id: 4, word: 'Thank you', translation: 'Gracias', image: 'thankyou.jpg', audio: 'thankyou.mp3' },
  // Add more words/phrases as needed
];

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNext = () => {
    setShowTranslation(false);
    setCurrentIndex((currentIndex + 1) % words.length);
  };

  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <h2 className="card-title">{words[currentIndex].word}</h2>
        {words[currentIndex].image && <img src={words[currentIndex].image} alt={words[currentIndex].word} />}
        {showTranslation && <p className="card-text">{words[currentIndex].translation}</p>}
        <button className="flashcard-button" onClick={() => setShowTranslation(!showTranslation)}>
          {showTranslation ? 'Hide' : 'Show'} Translation
        </button>
        {words[currentIndex].audio && (
          <audio controls>
            <source src={words[currentIndex].audio} type="audio/mpeg" />
          </audio>
        )}
      </div>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Flashcards;

