import React from 'react';

function GithubUser({ userData }) {
  if (!userData) {
    return <div>Qui sotto per cercare</div>;
  }

  return (
    <div>
      <h2>{userData.name || 'Nome non disponibile'}</h2>
      <p>Username: {userData.login}</p>
      <img src={userData.avatar_url} alt="Avatar" />
    </div>
  );
}

export default GithubUser;
