import React, { useState, useEffect } from 'react';
import GithubUser from './GithubUser';

function GithubUsers() {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUsername(username);
    setUsername('');
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (submittedUsername) {
        try {
          const response = await fetch(`https://api.github.com/users/${submittedUsername}`);
          if (!response.ok) {
            throw new Error('Fetch fallito');
          }
          const data = await response.json();
          setUserData(data);
          setError(null);
        } catch (error) {
          console.error(error.message);
          setUserData(null);
          setError('Utente non trovato');
        }
      }
    };

    fetchData();
  }, [submittedUsername]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Cerca Utente:
          <input type="text" value={username} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Risultato Utenti Github:</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        userData && <GithubUser userData={userData} />
      )}
    </div>
  );
}

export default GithubUsers;
