import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Container from "./ComponentComposition/Container";
import GithubUser from "./DataFetching/GithubUser";
import GithubUsers from "./DataFetching/GithubUsers";
import useCurrentLocation from './CustomHooks-5/UseCurrentLocation';
import FilteredList from './UseMemo/FilteredList';
import ShowGithubUser from './ReactRouter-3/ShowGithubUser';
import Counter from './ReactRouter-3/Counter';
import Welcome from './ReactRouter-3/Welcome';
import GithubUserList from './ReactRouter-6/GithubUserList';

const fetcher = url => fetch(url).then(response => {
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
});

function App() {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  const data = [
    { id: 1, name: 'Giovanni', age: 25 },
    { id: 2, name: 'Francesco', age: 30 },
    { id: 3, name: 'Alessandro', age: 15 },
  ];

  return (
    <SWRConfig value={{ fetcher }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/users">GitHub Users</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={
              <>
                <Container title="Clicca qui">
                  <p>Contenuto container</p>
                </Container>
                <GithubUser username="dartakk"/>
                <GithubUsers/>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {location && (<p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>)}
                <button onClick={getCurrentLocation}>Get Current Location</button>
                <FilteredList data={data} />
                <Welcome/>
                <Counter/>
              </>
            } />
            <Route path="/welcome" element={<Welcome name="Francesco" />} />
            <Route path="/counter" element={<Counter initValue={0} incremento={1} />} />
            <Route path="/users/*" element={<GithubUserList />} />
            <Route path="/users" element={<Message />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </SWRConfig>
  );
}

const Message = () => {
  return (
    <>
      <h2>Add a user and select it</h2>
      <GithubUserList />
    </>
  );
};

const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

export default App;
