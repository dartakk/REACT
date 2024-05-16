import React, { useState, useEffect } from 'react';

const GithubUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>GitHub Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={user.html_url}>{user.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
