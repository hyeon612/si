import React from 'react';
import '../styles/Island.css';

const Island = ({ children }) => {
  return (
    <div className="ocean-container">
      <div className="wave-background">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      <div className="island">
        <div className="island-base"></div>
        <div className="palm-tree">
          <div className="tree-trunk"></div>
          <div className="palm-leaves">
            <div className="leaf leaf1"></div>
            <div className="leaf leaf2"></div>
            <div className="leaf leaf3"></div>
            <div className="leaf leaf4"></div>
          </div>
        </div>
        <div className="island-sand"></div>
      </div>
      
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default Island;