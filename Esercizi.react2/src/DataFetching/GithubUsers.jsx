import React, { useState } from 'react';
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

  const addUser = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUsers(prevUsers => ({
          ...prevUsers,
          [username]: data
        }));
      })
      .catch(error => console.error('Error fetching user data:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Cerca Utente:
          <input type="text" value={username} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedUsername && addUser(submittedUsername)}
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
