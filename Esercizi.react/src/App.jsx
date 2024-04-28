import React from 'react';
import Welcome from './Welcome';
import AlertClock from './AlertClock';
import Counter from './Counter';
import Clock from './Clock';
import MouseClicker from './MouseClicker';

function App() {
  const handleButtonClick = () => {
const currentTime = new Date().toLocaleTimeString();
    alert('Current time is: ' + currentTime);
};
return (
    <div className="App">
      <Welcome name="Francesco" age={30} />
      <AlertClock onClick={handleButtonClick} />
      <Counter initValue={0} incremento={1}/>
      <Clock />
      <MouseClicker />
    </div>
  );
}

export default App;


/*Se non viene passata una prop name al component Welcome il valore di name sarà "undefined".*/
/*Si puo usare un valore predefinito utilizzanto le default props di React*/
