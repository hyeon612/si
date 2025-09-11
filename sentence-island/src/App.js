import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import SandScreen from './components/SandScreen';
import LetterScreen from './components/LetterScreen';
import SendLetterScreen from './components/SendLetterScreen';
import useRandomSentence from './hooks/useRandomSentence';
import { sentences } from './data/sentences';
import './styles/global.css';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('main'); // 'main', 'sand', 'letter', 'send'
  const [mode, setMode] = useState(null); // 'category', 'send'
  const [currentSentence, setCurrentSentence] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showBottle, setShowBottle] = useState(false);
  const [customSentences, setCustomSentences] = useState([]);
  const { getRandomSentence } = useRandomSentence();

  const handleModeSelect = (selectedMode) => {
    if (selectedMode === 'send') {
      setCurrentScreen('send');
    } else if (selectedMode === 'category') {
      setMode('category');
    } else {
      setMode(null);
      setCurrentScreen('main');
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentScreen('sand');
    setShowBottle(true);
  };

  const handleBottleClick = () => {
    const sentence = getRandomSentence(selectedCategory, customSentences);
    setCurrentSentence(sentence);
    setCurrentScreen('letter');
  };

  const handleSendLetter = (formData) => {
    const newSentence = {
      id: Date.now(), // 임시 ID
      text: formData.text,
      author: formData.author || '',
      book: formData.book || '',
      category: formData.category,
      tags: []
    };

    setCustomSentences(prev => [...prev, newSentence]);
    alert('병편지가 성공적으로 보내졌습니다! 다른 사람들이 받아볼 수 있게 되었어요.');
    setCurrentScreen('main');
    setMode(null);
  };

  const handleCloseMessage = () => {
    setCurrentScreen('main');
    setCurrentSentence(null);
    setSelectedCategory(null);
    setShowBottle(false);
    setMode(null);
    
    // 화면 전환 후 상태 리셋
    setTimeout(() => {
      setCurrentScreen('main');
    }, 500);
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
    setMode(null);
    setCurrentSentence(null);
    setSelectedCategory(null);
    setShowBottle(false);
  };

  return (
    <div className="App">
      {currentScreen === 'main' && (
        <MainScreen 
          onCategorySelect={handleCategorySelect}
          onModeSelect={handleModeSelect}
          mode={mode}
        />
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
      
      {currentScreen === 'send' && (
        <SendLetterScreen
          onBack={handleBackToMain}
          onSubmit={handleSendLetter}
        />
      )}
    </div>
  );
}

export default App;