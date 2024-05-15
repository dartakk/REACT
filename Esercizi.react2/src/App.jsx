import React from 'react';
import Container from "./ComponentComposition/Container";
import GithubUser from "./DataFetching/GithubUser";
import GithubUsers from "./DataFetching/GithubUsers";
import useCurrentLocation from './CustomHooks-5/UseCurrentLocation';

function App() {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <Container title="Clicca qui">
        <p>Contenuto container</p>
      </Container>
      <GithubUser username="dartakk"/>
      <GithubUsers/>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (<p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>)}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
}

export default App;
