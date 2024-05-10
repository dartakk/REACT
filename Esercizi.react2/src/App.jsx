import Container from "./ComponentComposition/Container";
import GithubUser from "./DataFetching/GithubUser";
import GithubUsers from "./DataFetching/GithubUsers";

function App() {
return (
    <div>
    <Container title="Clicca qui">
    <p>Contenuto container</p>
    </Container>
    <GithubUser username="dartakk"/>
    <GithubUsers/>
    </div>
  );
}

export default App;