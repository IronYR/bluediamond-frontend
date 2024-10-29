import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ texts }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout;

    if (isInitialRender) {
      timeout = setTimeout(() => {
        setIsInitialRender(false);
      }, 500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }, 5);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(prev => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts, isInitialRender]);

  return (
    <div>
      <span>{displayedText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterEffect;
