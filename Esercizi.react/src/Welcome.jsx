import React from 'react';
import Age from './Age';

function Welcome({ name, age }) {
  return (
    <div>
      <p>Benvenuto, <strong>{name}</strong>!</p>
      {age > 18 && <Age age={age} />}

      {age && <Age age={age} />}

      {(age > 18 && age < 65) && <Age age={age} />}

      {age > 18 && age < 65 && name === "John" && <Age age={age} />}
    </div>
  );
}

export default Welcome;
