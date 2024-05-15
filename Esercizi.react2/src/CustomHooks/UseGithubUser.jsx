import { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (username) {
      fetchUserData();
    } else {
      setUserData(null);
    }
  }, [username]);

  return userData;
}

export default useGithubUser;
