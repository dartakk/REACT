import React from 'react';
import Message from './Message';

function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Message />
    </div>
  );
}

export default Hello;

/*E' possibile usare Hello piu di una volta dentro App. Ogni volta che si mette li verrà renderizzata indipendentemente dalle altre.*/

/*E' possibile, e quando si usa verra renderizzato come parte del contenuto App, come qualsiasi component*/