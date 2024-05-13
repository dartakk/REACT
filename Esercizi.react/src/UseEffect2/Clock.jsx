import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext'; // Assicurati che il percorso sia corretto

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="div-clock">
      <h2>
        {language === 'en' ? 'Current time:' : 'Orario attuale:'}{' '}
        {currentTime.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Clock;
