import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initValue, incremento }) {
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

  useEffect(() => {
    console.log("Current counter value:", counter);
  }, [counter]);

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
