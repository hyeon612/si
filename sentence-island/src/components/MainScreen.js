import React from 'react';
import '../styles/MainScreen.css';
import islandBackground from '../images/첫화면 섬만 있는 배경.png';
import waveImage from '../images/첫화면 파도.png';

const MainScreen = ({ onCategorySelect }) => {
  return (
    <div className="main-screen">
      <div className="background-container">
        <img src={islandBackground} alt="섬 배경" className="island-background" />
        <img src={waveImage} alt="파도" className="main-wave" />
      </div>
      
      <div className="main-content">
        
        <div className="category-selection">
          <h2 className="selection-title">당신에게 닿을 문장의 주제를 선택하세요</h2>
          <div className="category-buttons">
            <button className="category-btn love" onClick={() => onCategorySelect('love')}>
              <span className="category-emoji">💞</span>
              <span className="category-text">사랑</span>
            </button>
            <button className="category-btn friendship" onClick={() => onCategorySelect('friendship')}>
              <span className="category-emoji">👥</span>
              <span className="category-text">우정</span>
            </button>
            <button className="category-btn career" onClick={() => onCategorySelect('career')}>
              <span className="category-emoji">🧭</span>
              <span className="category-text">진로</span>
            </button>
            <button className="category-btn comfort" onClick={() => onCategorySelect('comfort')}>
              <span className="category-emoji">💧</span>
              <span className="category-text">위로</span>
            </button>
            <button className="category-btn travel" onClick={() => onCategorySelect('travel')}>
              <span className="category-emoji">🧳</span>
              <span className="category-text">여행</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;