import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => {
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
});

function useGithubUser(username) {
  const { data, error, revalidate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);

  const refetchUserData = () => {
    revalidate();
  };

  return {
    userData: data,
    isLoading: !error && !data,
    isError: error,
    refetchUserData
  };
}

export default useGithubUser;
