import React, { useState } from 'react';
import Welcome from '../ConditionalRendering1/Welcome'

export function InteractiveWelcome() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Controlled Forms</h1>
      <input type="text" placeholder="Scrivi il tuo nome" value={name} onChange={handleInputChange}/>
      {name && <Welcome name={name}/>}
    </div>
  );
}
