import React from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from '../DataFetching/GithubUser';


function ShowGithubUser() {
  const { username } = useParams();

  return <GithubUser username={username} />;
}

export default ShowGithubUser;
