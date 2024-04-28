import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initValue, incremento}) {
  const [counter, setCounter] = useState(initValue);

  const incrementCounter = () => {
    setCounter(prev => prev + incremento);
  };

  const decrementCounter = () => {
    setCounter(prev => prev - incremento)
  }

  const resetCounter = () => {
    setCounter(initValue)
  }
  return (
    <div>
      <h2>{counter}</h2>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;

/*La funzione setter riceve una funziona come parametro e assicura l'accesso al valore piu recente dello state */