import React, { useRef, useEffect, StrictMode } from 'react';

export function ComponentWithEffect() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Il componente è stato montato per la prima volta.");
      isMounted.current = true;
    }
  }, []);

  return <div>Componente con effetto</div>;
}

function App() {
  return (
    <StrictMode>
      <ComponentWithEffect />
    </StrictMode>
  );
}