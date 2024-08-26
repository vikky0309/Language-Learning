import React, { useState } from 'react';
import './Learning.css';
//https://git.jetbrains.space/devfolks/main/google-scheduler.git//
const lessons = {
  Spanish: {
    Greetings: [
      { phrase: 'Hello', translation: 'Hola', audio: 'https://www.50languages.com/lib/audio/es/es0101.mp3' },
      { phrase: 'Goodbye', translation: 'Adiós', audio: 'https://www.50languages.com/lib/audio/es/es0135.mp3' }
      
       
    ],
    CommonPhrases: [
      { phrase: 'Please', translation: 'Por favor', audio: 'https://www.50languages.com/lib/audio/es/es0110.mp3' },
      { phrase: 'Thank you', translation: 'Gracias', audio: 'https://www.50languages.com/lib/audio/es/es0111.mp3' }
    ],
    Numbers: [
      { phrase: 'One', translation: 'Uno', audio: 'https://www.50languages.com/lib/audio/es/es0201.mp3' },
      { phrase: 'Two', translation: 'Dos', audio: 'https://www.50languages.com/lib/audio/es/es0202.mp3' },
      { phrase: 'One', translation: 'Uno', audio: 'https://www.50languages.com/lib/audio/es/es0201.mp3' },
      { phrase: 'Two', translation: 'Dos', audio: 'https://www.50languages.com/lib/audio/es/es0202.mp3' },
      { phrase: 'Three', translation: 'Tres', audio: 'https://www.50languages.com/lib/audio/es/es0203.mp3' },
      { phrase: 'Four', translation: 'Cuatro', audio: 'https://www.50languages.com/lib/audio/es/es0204.mp3' },
      { phrase: 'Five', translation: 'Cinco', audio: 'https://www.50languages.com/lib/audio/es/es0205.mp3' },
      { phrase: 'Six', translation: 'Seis' },
      { phrase: 'Seven', translation: 'Siete' },
      { phrase: 'Eight', translation: 'Ocho' },
      { phrase: 'Nine', translation: 'Nueve' },
      { phrase: 'Ten', translation: 'Diez' },
      { phrase: 'Eleven', translation: 'Once' },
      { phrase: 'Twelve', translation: 'Doce' },
      { phrase: 'Thirteen', translation: 'Trece' },
      { phrase: 'Fourteen', translation: 'Catorce' },
      { phrase: 'Fifteen', translation: 'Quince' },
      { phrase: 'Sixteen', translation: 'Dieciséis' },
      { phrase: 'Seventeen', translation: 'Diecisiete' },
      { phrase: 'Eighteen', translation: 'Dieciocho' },
      { phrase: 'Nineteen', translation: 'Diecinueve' },
      { phrase: 'Twenty', translation: 'Veinte' },
      { phrase: 'Twenty-one', translation: 'Veintiuno' },
      { phrase: 'Twenty-two', translation: 'Veintidós' },
      { phrase: 'Twenty-three', translation: 'Veintitrés' },
      { phrase: 'Twenty-four', translation: 'Veinticuatro' },
      { phrase: 'Twenty-five', translation: 'Veinticinco' },
      { phrase: 'Twenty-six', translation: 'Veintiséis' },
      { phrase: 'Twenty-seven', translation: 'Veintisiete' },
      { phrase: 'Twenty-eight', translation: 'Veintiocho' },
      { phrase: 'Twenty-nine', translation: 'Veintinueve' },
      { phrase: 'Thirty', translation: 'Treinta' },
      { phrase: 'Thirty-one', translation: 'Treinta y uno' },
      { phrase: 'Thirty-two', translation: 'Treinta y dos' },
      { phrase: 'Thirty-three', translation: 'Treinta y tres' },
      { phrase: 'Thirty-four', translation: 'Treinta y cuatro' },
      { phrase: 'Thirty-five', translation: 'Treinta y cinco' },
      { phrase: 'Thirty-six', translation: 'Treinta y seis' },
      { phrase: 'Thirty-seven', translation: 'Treinta y siete' },
      { phrase: 'Thirty-eight', translation: 'Treinta y ocho' },
      { phrase: 'Thirty-nine', translation: 'Treinta y nueve' },
      { phrase: 'Forty', translation: 'Cuarenta' },
      { phrase: 'Forty-one', translation: 'Cuarenta y uno' },
      { phrase: 'Forty-two', translation: 'Cuarenta y dos' },
      { phrase: 'Forty-three', translation: 'Cuarenta y tres' },
      { phrase: 'Forty-four', translation: 'Cuarenta y cuatro' },
      { phrase: 'Forty-five', translation: 'Cuarenta y cinco' },
      { phrase: 'Forty-six', translation: 'Cuarenta y seis' },
      { phrase: 'Forty-seven', translation: 'Cuarenta y siete' },
      { phrase: 'Forty-eight', translation: 'Cuarenta y ocho' },
      { phrase: 'Forty-nine', translation: 'Cuarenta y nueve' },
      { phrase: 'Fifty', translation: 'Cincuenta' },
      { phrase: 'Fifty-one', translation: 'Cincuenta y uno' },
      { phrase: 'Fifty-two', translation: 'Cincuenta y dos' },
      { phrase: 'Fifty-three', translation: 'Cincuenta y tres' },
      { phrase: 'Fifty-four', translation: 'Cincuenta y cuatro' },
      { phrase: 'Fifty-five', translation: 'Cincuenta y cinco' },
      { phrase: 'Fifty-six', translation: 'Cincuenta y seis' },
      { phrase: 'Fifty-seven', translation: 'Cincuenta y siete' },
      { phrase: 'Fifty-eight', translation: 'Cincuenta y ocho' },
      { phrase: 'Fifty-nine', translation: 'Cincuenta y nueve' },
      { phrase: 'Sixty', translation: 'Sesenta' },
      { phrase: 'Sixty-one', translation: 'Sesenta y uno' },
      { phrase: 'Sixty-two', translation: 'Sesenta y dos' },
      { phrase: 'Sixty-three', translation: 'Sesenta y tres' },
      { phrase: 'Sixty-four', translation: 'Sesenta y cuatro' },
      { phrase: 'Sixty-five', translation: 'Sesenta y cinco' },
      { phrase: 'Sixty-six', translation: 'Sesenta y seis' },
      { phrase: 'Sixty-seven', translation: 'Sesenta y siete' },
      { phrase: 'Sixty-eight', translation: 'Sesenta y ocho' },
      { phrase: 'Sixty-nine', translation: 'Sesenta y nueve' },
      { phrase: 'Seventy', translation: 'Setenta' },
      { phrase: 'Seventy-one', translation: 'Setenta y uno' },
      { phrase: 'Seventy-two', translation: 'Setenta y dos' },
      { phrase: 'Seventy-three', translation: 'Setenta y tres' },
      { phrase: 'Seventy-four', translation: 'Setenta y cuatro' },
      { phrase: 'Seventy-five', translation: 'Setenta y cinco' },
      { phrase: 'Seventy-six', translation: 'Setenta y seis' },
      { phrase: 'Seventy-seven', translation: 'Setenta y siete' },
      { phrase: 'Seventy-eight', translation: 'Setenta y ocho' },
      { phrase: 'Seventy-nine', translation: 'Setenta y nueve' },
      { phrase: 'Eighty', translation: 'Ochenta' },
      { phrase: 'Eighty-one', translation: 'Ochenta y uno' },
      { phrase: 'Eighty-two', translation: 'Ochenta y dos' },
      { phrase: 'Eighty-three', translation: 'Ochenta y tres' },
      { phrase: 'Eighty-four', translation: 'Ochenta y cuatro' },
      { phrase: 'Eighty-five', translation: 'Ochenta y cinco' },
      { phrase: 'Eighty-six', translation: 'Ochenta y seis' },
      { phrase: 'Eighty-seven', translation: 'Ochenta y siete' },
      { phrase: 'Eighty-eight', translation: 'Ochenta y ocho' },
      { phrase: 'Eighty-nine', translation: 'Ochenta y nueve' },
      { phrase: 'Ninety', translation: 'Noventa' },
      { phrase: 'Ninety-one', translation: 'Noventa y uno' },
      { phrase: 'Ninety-two', translation: 'Noventa y dos' },
      { phrase: 'Ninety-three', translation: 'Noventa y tres' },
      { phrase: 'Ninety-four', translation: 'Noventa y cuatro' },
      { phrase: 'Ninety-five', translation: 'Noventa y cinco' },
      { phrase: 'Ninety-six', translation: 'Noventa y seis' },
      { phrase: 'Ninety-seven', translation: 'Noventa y siete' },
      { phrase: 'Ninety-eight', translation: 'Noventa y ocho' },
      { phrase: 'Ninety-nine', translation: 'Noventa y nueve' },
      { phrase: 'One hundred', translation: 'Cien' }

    ],
    DaysOfTheWeek: [
      { phrase: 'Monday', translation: 'Lunes', audio: 'https://www.50languages.com/lib/audio/es/es0203.mp3' },
      { phrase: 'Tuesday', translation: 'Martes', audio: 'https://www.50languages.com/lib/audio/es/es0204.mp3' }
    ]
  },
  Yoruba: {
    Greetings: [
      { phrase: 'Hello', translation: 'Bawo', audio: 'https://www.example.com/audio/yoruba_hello.mp3' },
      { phrase: 'Goodbye', translation: 'O digba', audio: 'https://www.example.com/audio/yoruba_goodbye.mp3' }
    ],
    CommonPhrases: [
      { phrase: 'Please', translation: 'E jowo', audio: 'https://www.example.com/audio/yoruba_please.mp3' },
      { phrase: 'Thank you', translation: 'E se', audio: 'https://www.example.com/audio/yoruba_thank_you.mp3' }
    ],
    Numbers: [
      { phrase: 'One', translation: 'Eni', audio: 'https://www.example.com/audio/yoruba_one.mp3' },
      { phrase: 'Two', translation: 'Eji', audio: 'https://www.example.com/audio/yoruba_two.mp3' }
    ],
    DaysOfTheWeek: [
      { phrase: 'Monday', translation: 'Ojo Aje', audio: 'https://www.example.com/audio/yoruba_monday.mp3' },
      { phrase: 'Tuesday', translation: 'Ojo Isegun', audio: 'https://www.example.com/audio/yoruba_tuesday.mp3' }
    ]
  },
  French: {
    Greetings: [
      { phrase: 'Hello', translation: 'Bonjour', audio: 'https://www.50languages.com/lib/audio/fr/fr0101.mp3' },
      { phrase: 'Goodbye', translation: 'Au revoir', audio: 'https://www.50languages.com/lib/audio/fr/fr0135.mp3' }
    ],
    CommonPhrases: [
      { phrase: 'Please', translation: 'S’il vous plaît', audio: 'https://www.50languages.com/lib/audio/fr/fr0110.mp3' },
      { phrase: 'Thank you', translation: 'Merci', audio: 'https://www.50languages.com/lib/audio/fr/fr0111.mp3' }
    ],
    Numbers: [
      { phrase: 'One', translation: 'Un', audio: 'https://www.50languages.com/lib/audio/fr/fr0201.mp3' },
      { phrase: 'Two', translation: 'Deux', audio: 'https://www.50languages.com/lib/audio/fr/fr0202.mp3' }
    ],
    DaysOfTheWeek: [
      { phrase: 'Monday', translation: 'Lundi', audio: 'https://www.50languages.com/lib/audio/fr/fr0203.mp3' },
      { phrase: 'Tuesday', translation: 'Mardi', audio: 'https://www.50languages.com/lib/audio/fr/fr0204.mp3' }
    ]
  }
};

const Learning = () => {
  const [currentLanguage, setCurrentLanguage] = useState('Spanish');
  const [currentCategory, setCurrentCategory] = useState('Greetings');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedPhrases, setLearnedPhrases] = useState({});

  const handlePlayAudio = (audioPath) => {
    const audio = new Audio(audioPath);
    audio.play();
  };

  const handleNext = () => {
    if (currentIndex < lessons[currentLanguage][currentCategory].length - 1) {
      setCurrentIndex(currentIndex + 1);
      updateLearnedPhrases();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const updateLearnedPhrases = () => {
    const key = `${currentLanguage}-${currentCategory}`;
    setLearnedPhrases((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
  };

  const getProgress = () => {
    const key = `${currentLanguage}-${currentCategory}`;
    const learned = learnedPhrases[key] || 0;
    const total = lessons[currentLanguage][currentCategory].length;
    return (learned / total) * 100;
  };

  const renderFlashcards = () => {
    const currentLesson = lessons[currentLanguage][currentCategory][currentIndex];
    return (
      <div className="flashcard">
        <div className="flashcard-front">
          <p>{currentLesson.phrase}</p>
          <button onClick={() => handlePlayAudio(currentLesson.audio)}>🔊</button>
        </div>
        <div className="flashcard-back">
          <p>{currentLesson.translation}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="learning-container">
      <h1>Learn New Phrases</h1>
      <div className="language-selector">
        {Object.keys(lessons).map((language) => (
          <button
            key={language}
            onClick={() => {
              setCurrentLanguage(language);
              setCurrentCategory('Greetings');
              setCurrentIndex(0); // Reset to the first lesson of the new language
            }}
          >
            {language}
          </button>
        ))}
      </div>
      <div className="category-selector">
        {Object.keys(lessons[currentLanguage]).map((category) => (
          <button
            key={category}
            onClick={() => {
              setCurrentCategory(category);
              setCurrentIndex(0); // Reset to the first lesson of the new category
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${getProgress()}%` }}></div>
      </div>
      <p>{`Learned ${learnedPhrases[`${currentLanguage}-${currentCategory}`] || 0} out of ${lessons[currentLanguage][currentCategory].length} phrases`}</p>
      <div className="flashcard-container">
        {renderFlashcards()}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === lessons[currentLanguage][currentCategory].length - 1}>Next</button>
      </div>
    </div>
  );
};

export default Learning;
