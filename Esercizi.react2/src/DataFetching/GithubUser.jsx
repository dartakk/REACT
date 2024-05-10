import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('Fallito');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Username: {userData.login}</p>
      <img src={userData.avatar_url} alt="Avatar" />
    </div>
  );
}

export default GithubUser;
