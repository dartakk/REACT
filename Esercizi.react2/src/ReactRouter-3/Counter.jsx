import React, { useState, useEffect, useRef } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initValue, incremento }) {
  const [counter, setCounter] = useState(initValue);
  const prevCounterRef = useRef(initValue);
  const [aRef, setARef] = useState("");

  const updateARef = (newCounter) => {
    if (newCounter > prevCounterRef.current) {
      setARef("su");
    } else if (newCounter < prevCounterRef.current) {
      setARef("giù");
    }
    prevCounterRef.current = newCounter;
  };

  const incrementCounter = () => {
    setCounter(prev => prev + incremento);
  };

  const decrementCounter = () => {
    setCounter(prev => prev - incremento);
  };

  const resetCounter = () => {
    setCounter(initValue);
  };

  useEffect(() => {
    updateARef(counter);
    if (aRef !== prevCounterRef.current) {
      console.log("Current direction:", aRef);
    }
  }, [counter, aRef]);

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
