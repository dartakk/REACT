import Welcome from './ConditionalRendering1/Welcome';
import AlertClock from './Events/AlertClock';
import Counter from './State2/Counter';
import Clock from './UseEffect2/Clock';
import MouseClicker from './HandlingEvents2/MouseClicker';
import { InteractiveWelcome } from './ControlledForms2/InteractiveWelcome';
import { LoginComponent } from './ControlledForms2/Login';

function App() {
  const handleButtonClick = () => {
const currentTime = new Date().toLocaleTimeString();
    alert('Current time is: ' + currentTime);
};

const handleLogin = (loginData) => {
  console.log(loginData);

};
return (
    <div className="App">
      <Welcome name="Francesco" age={30} />
      <AlertClock onClick={handleButtonClick} />
      <Counter initValue={0} incremento={1}/>
      <Clock />
      <MouseClicker />
      <InteractiveWelcome/>
      <LoginComponent onLogin={handleLogin}/>
    </div>
  );
}

export default App;


/*Se non viene passata una prop name al component Welcome il valore di name sarà "undefined".*/
/*Si puo usare un valore predefinito utilizzanto le default props di React*/
