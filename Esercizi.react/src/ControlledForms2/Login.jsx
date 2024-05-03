import React, { useState } from 'react';

export function LoginComponent({onLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ username, password, rememberMe })
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setRememberMe(false);
  }
  const disabledLogin = !username || !password

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:<input type="text" value={username} onChange={handleUsernameChange}/></label>
      </div>
      <div>
        <label>Password:<input type="password" value={password} onChange={handlePasswordChange}/></label>
      </div>
      <div>
        <label>Remember Me:<input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}/></label>
      </div>
      <button type="submit" disabled={disabledLogin}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}


/* Si usa preventDefault per prevenire il comportamento predefinito di form*/