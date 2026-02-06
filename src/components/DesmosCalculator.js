import React, { useState, useEffect, useRef, useCallback } from 'react';
import './DesmosCalculator.css';

// Desmos API Key (free for educational use)
const DESMOS_API_KEY = 'dcb31709b452b1cf9dc26972add0fda6';

export default function DesmosCalculator({ onClose }) {
  const [calculatorType, setCalculatorType] = useState('graphing'); // 'graphing' or 'scientific'
  const graphingRef = useRef(null);
  const scientificRef = useRef(null);
  const calculatorInstance = useRef(null);

  const initCalculator = useCallback(() => {
    if (!window.Desmos) return;

    // Destroy previous instance if exists
    if (calculatorInstance.current) {
      calculatorInstance.current.destroy();
      calculatorInstance.current = null;
    }

    const container = calculatorType === 'graphing' ? graphingRef.current : scientificRef.current;
    if (!container) return;

    if (calculatorType === 'graphing') {
      calculatorInstance.current = window.Desmos.GraphingCalculator(container, {
        keypad: true,
        expressions: true,
        settingsMenu: true,
        expressionsTopbar: true,
        pointsOfInterest: true,
        trace: true,
        border: false,
        lockViewport: false,
        capExpressionSize: false,
        administerSecretFolders: false,
      });
    } else {
      calculatorInstance.current = window.Desmos.ScientificCalculator(container, {
        border: false,
      });
    }
  }, [calculatorType]);

  useEffect(() => {
    // Load Desmos script if not already loaded
    if (!window.Desmos) {
      const script = document.createElement('script');
      script.src = `https://www.desmos.com/api/v1.8/calculator.js?apiKey=${DESMOS_API_KEY}`;
      script.async = true;
      script.onload = () => initCalculator();
      document.body.appendChild(script);
    } else {
      initCalculator();
    }

    return () => {
      // Cleanup calculator instance
      if (calculatorInstance.current) {
        calculatorInstance.current.destroy();
        calculatorInstance.current = null;
      }
    };
  }, [calculatorType, initCalculator]);

  const handleTypeChange = (type) => {
    setCalculatorType(type);
  };

  return (
    <div className="desmos-overlay">
      <div className="desmos-modal">
        <div className="desmos-header">
          <div className="desmos-tabs">
            <button
              className={`desmos-tab ${calculatorType === 'graphing' ? 'active' : ''}`}
              onClick={() => handleTypeChange('graphing')}
            >
              📈 Graphing
            </button>
            <button
              className={`desmos-tab ${calculatorType === 'scientific' ? 'active' : ''}`}
              onClick={() => handleTypeChange('scientific')}
            >
              🔢 Scientific
            </button>
          </div>
          <button className="desmos-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="desmos-body">
          {calculatorType === 'graphing' ? (
            <div ref={graphingRef} className="desmos-graphing-container" />
          ) : (
            <div ref={scientificRef} className="desmos-scientific-container" />
          )}
        </div>

        <div className="desmos-footer">
          <span className="desmos-hint">
            {calculatorType === 'graphing'
              ? 'Type equations like y = x² or y = sin(x)'
              : 'Use for calculations during the math section'}
          </span>
        </div>
      </div>
    </div>
  );
}
