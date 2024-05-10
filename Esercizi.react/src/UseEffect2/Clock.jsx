import React, { useState, useEffect } from 'react';
import './Clock.scss';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervallo = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervallo);
    };
  }, []); 

  return (
    <div className="div-clock">
      <h2>Orario attuale: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
