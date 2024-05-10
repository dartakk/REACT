import React, { useState, useEffect } from 'react';
import GithubUser from './GithubUser';

function GithubUsers() {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [users, setUsers] = useState({});

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
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          setUsers(prevUsers => ({
            ...prevUsers,
            [submittedUsername]: userData
          }));
        } catch (error) {
          console.error('Error fetching user data:', error);
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
      <ul>
        {Object.keys(users).map(username => (
          <li key={username}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUsers;
