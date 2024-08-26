import React, { useState } from 'react';
import axios from 'axios';


const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState('');

  const translateText = async () => {
    const apiKey = 'AIzaSyA-GdPrJC5eZpJSRkbNglx3fon-txgZCqI';  // Replace with your actual API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
      q: inputText,
      target: 'es'  // Change target language code as needed
    };

    try {
      const response = await axios.post(url, data);
      setTranslatedText(response.data.data.translations[0].translatedText);
      setError('');  // Clear any previous errors
    } catch (error) {
      console.error('Error translating text:', error);
      setError('Failed to translate text. Please check the console for details.');
    }
  };

  return (
    <div>
      <h2>Translate Text</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={translateText}>Translate</button>
      <p>Translated Text: {translatedText}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Translate;
