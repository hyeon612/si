import React, { useState, useEffect } from 'react';
import '../styles/SandScreen.css';
import sandBackground from '../images/모래바닥 배경.png';
import waveImage from '../images/파도.png';
import bottleImage from '../images/유리병 편지.png';

const SandScreen = ({ onBottleClick, showBottle }) => {
  const [bottleVisible, setBottleVisible] = useState(false);

  useEffect(() => {
    if (showBottle) {
      // 파도 너울거림 3초 후 유리병 등장
      const timer = setTimeout(() => {
        setBottleVisible(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showBottle]);

  const handleBottleClick = () => {
    onBottleClick();
    setBottleVisible(false);
  };

  return (
    <div className="sand-screen">
      <div className="sand-background-container">
        <img src={sandBackground} alt="모래바닥 배경" className="sand-background" />
        
        {/* 파도 너울거림 */}
        <div className="wave-container">
          <img src={waveImage} alt="파도" className="wave wave-1" />
          <img src={waveImage} alt="파도" className="wave wave-2" />
        </div>
        
        {/* 유리병 편지 */}
        {bottleVisible && (
          <div className="bottle-container" onClick={handleBottleClick}>
            <img src={bottleImage} alt="유리병 편지" className="floating-bottle" />
            <div className="bottle-glow"></div>
            <p className="bottle-hint">클릭해서 편지를 확인하세요</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SandScreen;