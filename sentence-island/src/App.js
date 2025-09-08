import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import SandScreen from './components/SandScreen';
import LetterScreen from './components/LetterScreen';
import useRandomSentence from './hooks/useRandomSentence';
import './styles/global.css';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('main'); // 'main', 'sand', 'letter'
  const [currentSentence, setCurrentSentence] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showBottle, setShowBottle] = useState(false);
  const { getRandomSentence } = useRandomSentence();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentScreen('sand');
    setShowBottle(true);
  };

  const handleBottleClick = () => {
    const sentence = getRandomSentence(selectedCategory);
    setCurrentSentence(sentence);
    setCurrentScreen('letter');
  };

  const handleCloseMessage = () => {
    setCurrentScreen('main');
    setCurrentSentence(null);
    setSelectedCategory(null);
    setShowBottle(false);
    
    // 화면 전환 후 상태 리셋
    setTimeout(() => {
      setCurrentScreen('main');
    }, 500);
  };

  return (
    <div className="App">
      {currentScreen === 'main' && (
        <MainScreen onCategorySelect={handleCategorySelect} />
      )}
      
      {currentScreen === 'sand' && (
        <SandScreen onBottleClick={handleBottleClick} showBottle={showBottle} />
      )}
      
      {currentScreen === 'letter' && (
        <LetterScreen
          sentence={currentSentence}
          isVisible={currentScreen === 'letter'}
          onClose={handleCloseMessage}
        />
      )}
    </div>
  );
}

export default App;