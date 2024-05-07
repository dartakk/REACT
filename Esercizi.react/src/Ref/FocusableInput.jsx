import React, { useRef, useEffect } from 'react';

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
        <h1>Ref</h1>
      <input ref={inputRef} />
    </div>
  );
}
