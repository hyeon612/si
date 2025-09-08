import React, { useState, useEffect } from 'react';
import '../styles/MessageBottle.css';

const MessageBottle = ({ onClick, isFloating = true }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div 
      className={`message-bottle-container ${isFloating ? 'floating' : ''}`}
      onClick={handleClick}
    >
      <div className={`message-bottle ${isAnimating ? 'clicked' : ''}`}>
        <div className="bottle-neck"></div>
        <div className="bottle-cork"></div>
        <div className="bottle-body">
          <div className="bottle-message">
            <div className="message-scroll"></div>
          </div>
          <div className="bottle-reflection"></div>
        </div>
        <div className="bottle-glow"></div>
      </div>
    </div>
  );
};

export default MessageBottle;