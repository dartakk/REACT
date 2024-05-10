import React, { useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Ref</h1>
      <Form.Control ref={inputRef} style={{ borderRadius: '10px', border: '2px solid #007bff', padding: '10px' }} />
      <Button variant="primary" style={{ marginTop: '10px' }}>Submit</Button>
    </div>
  );
}
